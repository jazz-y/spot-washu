import React from 'react';
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WASHUCOORDS } from '../Consts';
import pinIcon from '../img/pin.svg';

// prop shape
interface SpaceMarker {
  id: string;
  name: string;
  coords: {
    lat: number;
    long: number;
  };
  description: string;
  attributes: string[];
}

interface MapProps {
  filteredSpaces: SpaceMarker[];
  selectedSpaceId?: string;
  onMarkerClick: (spaceId: string) => void;
}

const osmMapnik = {
  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const osmFallback = {
  url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abc',
};

// custom icon from pin.svg
const customIcon = L.icon({
  iconUrl: pinIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// resizes map when component mounts
const MapResizer = () => {
  const map = useMap();
  React.useEffect(() => {
    map.invalidateSize();
    map.setMaxZoom(19);
    map.setMinZoom(16);
  }, [map]);
  return null;
};

export const Map: React.FC<MapProps> = ({ filteredSpaces, selectedSpaceId, onMarkerClick }) => {
  const [isUsingFallback, setIsUsingFallback] = React.useState(false);

  const activeTiles = isUsingFallback ? osmFallback : osmMapnik;

  return (
    <MapContainer 
      center={[WASHUCOORDS.lat, WASHUCOORDS.long]} 
      zoom={16} 
      scrollWheelZoom={false} 
      className="w-full h-full"
    >
      <MapResizer />
      {/* uses osm mapnik first, then falls back if tile requests fail */}
      <TileLayer
        attribution={activeTiles.attribution}
        url={activeTiles.url}
        maxZoom={activeTiles.maxZoom}
        subdomains={isUsingFallback ? osmFallback.subdomains : undefined}
        eventHandlers={{
          tileerror: () => {
            if (!isUsingFallback) {
              setIsUsingFallback(true);
            }
          },
        }}
      />
      {filteredSpaces.map((space) => (
        <Marker
          key={space.id}
          position={[space.coords.lat, space.coords.long]}
          icon={customIcon}
          eventHandlers={{
            click: () => onMarkerClick(space.id),
          }}
          opacity={selectedSpaceId === space.id ? 1 : 0.7}
        />
      ))}
    </MapContainer>
  );
};


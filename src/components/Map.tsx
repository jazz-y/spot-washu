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
    map.setMaxZoom(18);
    map.setMinZoom(16);
  }, [map]);
  return null;
};

export const Map: React.FC<MapProps> = ({ filteredSpaces, selectedSpaceId, onMarkerClick }) => {
  return (
    <MapContainer 
      center={[WASHUCOORDS.lat, WASHUCOORDS.long]} 
      zoom={16} 
      scrollWheelZoom={false} 
      className="w-full h-full"
    >
      <MapResizer />
      {/* fetches map tiles from external source - external api :) */}
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
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


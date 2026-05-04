import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { WASHUCOORDS } from '../Consts';

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
}

const MapResizer = () => {
  const map = useMap();
  map.invalidateSize();
    map.setMaxBounds(map.getBounds());
    map.setMaxZoom(18);
    map.setMinZoom(16);
//   React.useEffect(() => {
//     
  
//   }, [map]);
  return null;
};

export const Map: React.FC<MapProps> = ({ filteredSpaces }) => {
  return (
    <MapContainer center={[WASHUCOORDS.lat, WASHUCOORDS.long]} zoom={16} scrollWheelZoom={false} className="w-full h-full">
      <MapResizer />
      {/* fetches map tiles from external source */}
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      {filteredSpaces.map((space) => (
        <Marker key={space.id} position={[space.coords.lat, space.coords.long]}>
          <Popup>
            <div className="w-48">
              <h3 className="font-bold text-lg mb-2">{space.name}</h3>
              <p className="text-sm mb-2">{space.description}</p>
              <div className="flex flex-wrap gap-1">
                {space.attributes.map((attr, idx) => (
                  <span key={idx} className="text-xs bg-deep-red-6 text-deep-red-1 px-2 py-1 rounded">
                    {attr}
                  </span>
                ))}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}


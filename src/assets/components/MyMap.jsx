import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { mapData } from '../mapData';

import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MyMap({type}) {
  const locations = mapData[type] || [];

  return (
    <div className="w-full h-screen bg-mainBg">
      <MapContainer
        center={[37.8044, -122.271]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        className="w-full h-full"
      >
        <ZoomControl position="bottomright" />

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={loc.position}
            icon={DefaultIcon}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              Type: {type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MyMap;
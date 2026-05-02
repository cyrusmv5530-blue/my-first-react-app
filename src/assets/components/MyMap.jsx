import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { mapData } from '../mapData';

function MyMap({type}) {
  const locations = mapData[type] || [];

  return (
    <div className = "w-full h-screen bg-mainBg">
    <MapContainer
    center={[37.8044, -122.271]}
    zoom={13} 
    scrollWheelZoom={false}
    zoomControl={false}
    className = "w-full h-full"
    >
      <ZoomControl position="bottomright" />



      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {locations.map((loc, index) => (
    <Marker key={index} position={loc.position}>
      <Popup> 
        <strong>{loc.name}</strong>
        <br/>
        Type: {type}
       </Popup>
    </Marker>
  ))}
    </MapContainer>
    </div>
  );
}

export default MyMap;
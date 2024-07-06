import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://buildit-backend.onrender.com/api/geocode')
      .then(response => response.json())
      .then(data => setLocation(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error fetching location data: {error.message}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer       
        center={[location.position.lat, location.position.lng]} 
        zoom={15} 
        style={{ 
        height: "200px",
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 1rem 4rem rgba(0, 0, 0, 0.2)"
    }}
>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.position.lat, location.position.lng]}>
        <Popup>
          <strong>{location.title}</strong><br />
          {location.address.label}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;

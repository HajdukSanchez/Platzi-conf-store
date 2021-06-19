import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  // Styles for the map component
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  // Default location of into the map
  const defaultCenter = {
    lat: 12.4267261,
    lng: -99.1718796,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

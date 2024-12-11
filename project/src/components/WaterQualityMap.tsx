import React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { cityWQIData } from '../data/waterQualityData';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN'; // Replace with actual token in production

const WaterQualityMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);

  return (
    <div className="h-[500px] rounded-lg overflow-hidden">
      <Map
        initialViewState={{
          latitude: 20.5937,
          longitude: 78.9629,
          zoom: 4
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {cityWQIData.map((city) => (
          <Marker
            key={city.city}
            latitude={0} // Add actual coordinates in production
            longitude={0}
            onClick={() => setSelectedCity(city.city)}
          >
            <div className={`w-6 h-6 rounded-full bg-blue-500 cursor-pointer
              ${city.wqi > 80 ? 'bg-green-500' : city.wqi > 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default WaterQualityMap;
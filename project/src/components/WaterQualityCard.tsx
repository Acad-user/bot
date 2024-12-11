import React from 'react';
import { WaterQualityParameters } from '../types/water';

interface WaterQualityCardProps {
  city: string;
  state: string;
  wqi: number;
  parameters: WaterQualityParameters;
}

const WaterQualityCard: React.FC<WaterQualityCardProps> = ({
  city,
  state,
  wqi,
  parameters
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-lg font-semibold mb-4">{city}, {state}</h4>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">WQI Score:</span>
          <span className="font-semibold">{wqi}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">pH Level:</span>
          <span className="font-semibold">{parameters.ph}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TDS:</span>
          <span className="font-semibold">{parameters.tds} mg/L</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Turbidity:</span>
          <span className="font-semibold">{parameters.turbidity} NTU</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Dissolved Oxygen:</span>
          <span className="font-semibold">{parameters.dissolvedOxygen} mg/L</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Temperature:</span>
          <span className="font-semibold">{parameters.temperature}°C</span>
        </div>
      </div>
    </div>
  );
};

export default WaterQualityCard;
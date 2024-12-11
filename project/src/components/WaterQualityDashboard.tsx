import React from 'react';
import { useWaterStore } from '../store/waterStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Droplet, Thermometer, Wind } from 'lucide-react';
import StatsCard from './StatsCard';
import WaterQualityCard from './WaterQualityCard';
import SearchBar from './SearchBar';

const WaterQualityDashboard = () => {
  const cities = useWaterStore((state) => state.cities);
  const cityData = [...cities].sort((a, b) => b.wqi - a.wqi);
  
  const avgWQI = (cityData.reduce((acc, city) => acc + city.wqi, 0) / cityData.length).toFixed(1);
  const avgTemp = (cityData.reduce((acc, city) => acc + city.parameters.temperature, 0) / cityData.length).toFixed(1);
  const avgDO = (cityData.reduce((acc, city) => acc + city.parameters.dissolvedOxygen, 0) / cityData.length).toFixed(1);

  return (
    <div className="space-y-8">
      <SearchBar />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Average WQI"
          value={avgWQI}
          Icon={Droplet}
          iconColor="text-blue-500"
        />
        <StatsCard
          title="Avg Temperature"
          value={`${avgTemp}°C`}
          Icon={Thermometer}
          iconColor="text-red-500"
        />
        <StatsCard
          title="Avg Dissolved O₂"
          value={`${avgDO} mg/L`}
          Icon={Wind}
          iconColor="text-green-500"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-6">City-wise Water Quality Index</h3>
        <div className="h-[400px]">
          <ResponsiveContainer>
            <BarChart data={cityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" angle={-45} textAnchor="end" height={100} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="wqi" fill="#3B82F6" name="WQI" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Parameter Trends Across Cities</h3>
        <div className="h-[400px]">
          <ResponsiveContainer>
            <LineChart data={cityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="parameters.ph" stroke="#3B82F6" name="pH" />
              <Line type="monotone" dataKey="parameters.tds" stroke="#EF4444" name="TDS" />
              <Line type="monotone" dataKey="parameters.dissolvedOxygen" stroke="#10B981" name="Dissolved O₂" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cityData.map((city) => (
          <WaterQualityCard
            key={city.city}
            city={city.city}
            state={city.state}
            wqi={city.wqi}
            parameters={city.parameters}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterQualityDashboard;
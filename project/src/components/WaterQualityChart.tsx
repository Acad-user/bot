import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { state: 'Maharashtra', wqi: 76 },
  { state: 'Gujarat', wqi: 82 },
  { state: 'Rajasthan', wqi: 68 },
  { state: 'Uttar Pradesh', wqi: 70 },
  { state: 'West Bengal', wqi: 65 },
  { state: 'Tamil Nadu', wqi: 80 },
  { state: 'Karnataka', wqi: 75 },
  { state: 'Madhya Pradesh', wqi: 72 },
  { state: 'Andhra Pradesh', wqi: 78 },
  { state: 'Punjab', wqi: 71 }
];

const WaterQualityChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="state" type="category" width={100} />
          <Tooltip />
          <Bar dataKey="wqi" fill="#3B82F6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterQualityChart;
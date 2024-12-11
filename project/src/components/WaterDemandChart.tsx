import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2020', availability: 150, demand: 120 },
  { year: '2021', availability: 140, demand: 130 },
  { year: '2022', availability: 135, demand: 145 },
  { year: '2023', availability: 130, demand: 150 },
  { year: '2024', availability: 128, demand: 160 },
  { year: '2025', availability: 125, demand: 170 }
];

const WaterDemandChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="availability" stroke="#3B82F6" strokeWidth={2} />
          <Line type="monotone" dataKey="demand" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterDemandChart;
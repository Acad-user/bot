import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PredictionData {
  month: string;
  actual: number;
  predicted: number;
}

const PredictiveAnalytics: React.FC = () => {
  const [predictions, setPredictions] = useState<PredictionData[]>([]);

  useEffect(() => {
    const generatePredictions = async () => {
      // Simple linear regression model for demonstration
      const model = tf.sequential();
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
      model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

      // Generate sample data
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const actualData = [75, 73, 70, 72, 68, 65];
      
      // Train model
      const xs = tf.tensor2d(Array.from({ length: 6 }, (_, i) => [i]));
      const ys = tf.tensor2d(actualData.map(v => [v]));
      
      await model.fit(xs, ys, { epochs: 100 });
      
      // Make predictions
      const predictions = Array.from({ length: 6 }, (_, i) => {
        const pred = model.predict(tf.tensor2d([[i + 6]])) as tf.Tensor;
        return {
          month: months[i],
          actual: actualData[i],
          predicted: Math.round(pred.dataSync()[0])
        };
      });

      setPredictions(predictions);
    };

    generatePredictions();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Water Quality Predictions</h3>
      <div className="h-[400px]">
        <ResponsiveContainer>
          <LineChart data={predictions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#3B82F6" name="Actual WQI" />
            <Line type="monotone" dataKey="predicted" stroke="#EF4444" name="Predicted WQI" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
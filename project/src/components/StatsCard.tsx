import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  Icon: LucideIcon;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, Icon, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className={`text-3xl font-bold ${iconColor}`}>
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
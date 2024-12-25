import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  Icon: LucideIcon;
}

export function StatCard({ title, value, Icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
    </div>
  );
}
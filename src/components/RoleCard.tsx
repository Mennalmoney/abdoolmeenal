import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  path: string;
  Icon: LucideIcon;
  description: string;
}

export function RoleCard({ title, path, Icon, description }: RoleCardProps) {
  return (
    <Link 
      to={path}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4"
    >
      <Icon className="w-12 h-12 text-blue-600" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
}
import React from 'react';
import { 
  Users, UserCog, School, GraduationCap, 
  ClipboardList, UserCircle 
} from 'lucide-react';
import { RoleCard } from '../components/RoleCard';

const roles = [
  {
    title: 'Admin',
    path: '/admin',
    Icon: UserCog,
    description: 'Manage all aspects of the school system'
  },
  {
    title: 'Head Teacher',
    path: '/head-teacher',
    Icon: School,
    description: 'Monitor and approve academic activities'
  },
  {
    title: 'Director',
    path: '/director',
    Icon: Users,
    description: 'Access school-wide analytics and reports'
  },
  {
    title: 'Exam Officer',
    path: '/exam-officer',
    Icon: ClipboardList,
    description: 'Manage exams and results'
  },
  {
    title: 'Teacher',
    path: '/teacher',
    Icon: GraduationCap,
    description: 'Manage classes and student progress'
  },
  {
    title: 'Parent',
    path: '/parent',
    Icon: UserCircle,
    description: 'Track child\'s progress and activities'
  }
];

export function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            School Management System
          </h1>
          <p className="text-xl text-gray-600">
            Select your role to access the dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <RoleCard key={role.path} {...role} />
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Navbar } from '../components/ui/navbar';

interface RoleLayoutProps {
  children: React.ReactNode;
  navItems: Array<{ label: string; href: string }>;
  userRole: string;
}

export function RoleLayout({ children, navItems, userRole }: RoleLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} userRole={userRole} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
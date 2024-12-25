import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  userRole: string;
}

export function Navbar({ items, userRole }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">SMS</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'inline-flex items-center px-1 pt-1 border-b-2',
                    location.pathname === item.href
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-4">
              Logged in as {userRole}
            </span>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LogOut className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
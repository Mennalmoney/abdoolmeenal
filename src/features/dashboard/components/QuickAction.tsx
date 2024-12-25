import React from 'react';

interface QuickActionProps {
  title: string;
  onClick: () => void;
}

export function QuickAction({ title, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full"
    >
      {title}
    </button>
  );
}
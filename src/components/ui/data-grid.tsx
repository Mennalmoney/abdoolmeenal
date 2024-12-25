import React from 'react';
import { DataTable } from './data-table';
import { Button } from './button';
import { Plus, Search } from 'lucide-react';

interface DataGridProps<T> {
  data: T[];
  columns: any[];
  title: string;
  onAdd?: () => void;
  onSearch?: (query: string) => void;
}

export function DataGrid<T>({
  data,
  columns,
  title,
  onAdd,
  onSearch,
}: DataGridProps<T>) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          {onSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {onAdd && (
            <Button onClick={onAdd} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New
            </Button>
          )}
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
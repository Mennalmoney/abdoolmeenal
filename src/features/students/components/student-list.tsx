import React from 'react';
import { DataTable } from '../../../components/ui/data-table';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import type { Student } from '../../../types';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'class',
    header: 'Class',
  },
  {
    accessorKey: 'admissionNumber',
    header: 'Admission No.',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    id: 'actions',
    cell: () => {
      return (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Pencil className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Trash2 className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      );
    },
  },
];

const data = [
  {
    id: '1',
    name: 'John Doe',
    class: '10A',
    admissionNumber: 'ADM001',
    gender: 'Male',
  },
  {
    id: '2',
    name: 'Jane Smith',
    class: '10B',
    admissionNumber: 'ADM002',
    gender: 'Female',
  },
];

export function StudentList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Students</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Student
        </button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
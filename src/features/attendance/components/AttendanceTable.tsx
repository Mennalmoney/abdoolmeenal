import React from 'react';
import { Check, X } from 'lucide-react';

interface AttendanceTableProps {
  students: Array<{
    id: string;
    name: string;
    isPresent: boolean;
  }>;
  onToggleAttendance: (studentId: string) => void;
}

export function AttendanceTable({ students, onToggleAttendance }: AttendanceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.isPresent ? (
                  <span className="text-green-600 flex items-center">
                    <Check className="w-4 h-4 mr-1" /> Present
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <X className="w-4 h-4 mr-1" /> Absent
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={() => onToggleAttendance(student.id)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
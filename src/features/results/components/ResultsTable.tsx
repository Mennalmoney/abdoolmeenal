import React from 'react';
import { Student } from '../../../types';

interface ResultsTableProps {
  students: Student[];
}

export function ResultsTable({ students }: ResultsTableProps) {
  const calculateTotal = (student: Student) => {
    const { classwork, homework, assessment, project, exam } = student.performance;
    return (
      classwork * 0.1 +
      homework * 0.1 +
      assessment * 0.2 +
      project * 0.1 +
      exam * 0.5
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CW (10%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              HW (10%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CA (20%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project (10%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam (50%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
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
                {student.performance.classwork}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.performance.homework}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.performance.assessment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.performance.project}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.performance.exam}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {calculateTotal(student).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import React from 'react';
import { RoleLayout } from '../../layouts/role-layout';
import { Card } from '../../components/ui/card';
import { DataTable } from '../../components/ui/data-table';
import { Users, BookOpen, ClipboardCheck } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/teacher' },
  { label: 'Students', href: '/teacher/students' },
  { label: 'Attendance', href: '/teacher/attendance' },
  { label: 'Results', href: '/teacher/results' },
];

const studentData = [
  {
    id: '1',
    name: 'John Doe',
    attendance: '95%',
    performance: 'A',
    lastAssignment: 'Completed',
  },
  {
    id: '2',
    name: 'Jane Smith',
    attendance: '88%',
    performance: 'B+',
    lastAssignment: 'Pending',
  },
];

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'attendance', header: 'Attendance' },
  { accessorKey: 'performance', header: 'Performance' },
  { accessorKey: 'lastAssignment', header: 'Last Assignment' },
];

export function TeacherDashboard() {
  return (
    <RoleLayout navItems={navItems} userRole="Teacher">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <Card.Header>
              <Card.Title className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Total Students
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold">45</p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Classes Today
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold">4</p>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                Pending Tasks
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold">3</p>
            </Card.Content>
          </Card>
        </div>

        <Card>
          <Card.Header>
            <Card.Title>Recent Student Activity</Card.Title>
          </Card.Header>
          <Card.Content>
            <DataTable columns={columns} data={studentData} />
          </Card.Content>
        </Card>
      </div>
    </RoleLayout>
  );
}
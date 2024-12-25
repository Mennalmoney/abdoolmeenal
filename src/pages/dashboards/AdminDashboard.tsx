import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { StatCard } from '../../features/dashboard/components/StatCard';
import { QuickAction } from '../../features/dashboard/components/QuickAction';
import { StudentList } from '../../features/students/components/student-list';
import { AttendanceOverview } from '../../features/attendance/components/attendance-overview';
import { Users, BookOpen, Calendar, PieChart } from 'lucide-react';

const stats = [
  { title: 'Total Students', value: '520', Icon: Users },
  { title: 'Total Classes', value: '24', Icon: BookOpen },
  { title: 'Active Courses', value: '48', Icon: Calendar },
  { title: 'Attendance Rate', value: '95%', Icon: PieChart },
];

const quickActions = [
  'Manage Students',
  'Manage Teachers',
  'Manage Classes',
  'View Reports',
  'Manage Attendance',
  'View Results',
];

export function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ title, value, Icon }) => (
            <StatCard key={title} title={title} value={value} Icon={Icon} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StudentList />
          <AttendanceOverview />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <QuickAction
                key={action}
                title={action}
                onClick={() => console.log(`Clicked: ${action}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
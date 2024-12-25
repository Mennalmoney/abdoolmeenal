import React from 'react';
import { Card } from '../../../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { class: '10A', attendance: 95 },
  { class: '10B', attendance: 88 },
  { class: '11A', attendance: 92 },
  { class: '11B', attendance: 85 },
  { class: '12A', attendance: 90 },
  { class: '12B', attendance: 87 },
];

export function AttendanceOverview() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Attendance Overview</Card.Title>
      </Card.Header>
      <Card.Content>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card.Content>
    </Card>
  );
}
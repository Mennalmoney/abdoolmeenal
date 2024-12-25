import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { ParentDashboard } from './pages/parent/ParentDashboard';
import { ExamOfficerDashboard } from './pages/exam-officer/ExamOfficerDashboard';
import { HeadTeacherDashboard } from './pages/head-teacher/HeadTeacherDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminDashboard />} />
        <Route path="/admin/teachers" element={<AdminDashboard />} />
        <Route path="/admin/classes" element={<AdminDashboard />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/students" element={<TeacherDashboard />} />
        <Route path="/teacher/attendance" element={<TeacherDashboard />} />
        <Route path="/teacher/results" element={<TeacherDashboard />} />
        
        {/* Parent Routes */}
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/parent/attendance" element={<ParentDashboard />} />
        <Route path="/parent/results" element={<ParentDashboard />} />
        
        {/* Exam Officer Routes */}
        <Route path="/exam-officer" element={<ExamOfficerDashboard />} />
        <Route path="/exam-officer/exams" element={<ExamOfficerDashboard />} />
        <Route path="/exam-officer/results" element={<ExamOfficerDashboard />} />
        
        {/* Head Teacher Routes */}
        <Route path="/head-teacher" element={<HeadTeacherDashboard />} />
        <Route path="/head-teacher/teachers" element={<HeadTeacherDashboard />} />
        <Route path="/head-teacher/results" element={<HeadTeacherDashboard />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
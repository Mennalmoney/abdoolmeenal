// Core types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'headTeacher' | 'examOfficer' | 'teacher' | 'parent';
  createdAt: Date;
}

export interface Student {
  id: string;
  name: string;
  gender: 'male' | 'female';
  dateOfBirth: Date;
  admissionNumber: string;
  class: string;
  parentId: string;
  performance: StudentPerformance;
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
  subjects: string[];
  students: string[];
}

export interface Subject {
  id: string;
  name: string;
  classId: string;
  teacherId: string;
}

export interface Attendance {
  id: string;
  date: Date;
  studentId: string;
  status: 'present' | 'absent' | 'late';
  classId: string;
}

export interface Result {
  id: string;
  studentId: string;
  subjectId: string;
  termId: string;
  classwork: number;
  homework: number;
  assessment: number;
  project: number;
  exam: number;
  teacherComment: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Fee {
  id: string;
  studentId: string;
  amount: number;
  type: 'tuition' | 'uniform' | 'books' | 'other';
  status: 'paid' | 'pending' | 'overdue';
  dueDate: Date;
  paidDate?: Date;
}

export interface LessonPlan {
  id: string;
  teacherId: string;
  subjectId: string;
  classId: string;
  week: number;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Club {
  id: string;
  name: string;
  advisorId: string;
  members: string[];
  activities: ClubActivity[];
}

export interface ClubActivity {
  id: string;
  clubId: string;
  name: string;
  date: Date;
  description: string;
  status: 'planned' | 'completed' | 'cancelled';
}

export interface Exam {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  subjects: ExamSubject[];
  status: 'draft' | 'published' | 'completed';
}

export interface ExamSubject {
  subjectId: string;
  date: Date;
  startTime: string;
  endTime: string;
  venue: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: Date;
}

export interface StudentPerformance {
  classwork: number;
  homework: number;
  assessment: number;
  project: number;
  exam: number;
}
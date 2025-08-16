'use client'

import { useState } from 'react'
import { FiUsers, FiTrendingUp, FiBook, FiTarget, FiCalendar, FiClock,FiEdit, FiEye } from 'react-icons/fi'

export default function StaffDashboard() {
  const [selectedCourse, setSelectedCourse] = useState('all')
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: 'cs101', name: 'CS 101 - Intro Programming' },
    { id: 'cs301', name: 'CS 301 - Advanced React' },
    { id: 'cs401', name: 'CS 401 - Senior Project' }
  ]

  const performanceMetrics = {
    totalStudents: 88,
    averageGrade: 85.2,
    completionRate: 78.5,
    activeAssignments: 12
  }

  const studentPerformance = [
    { name: "Alice Johnson", course: "CS 101", lastActivity: "2 hours ago", grade: 92, status: "excellent" },
    { name: "Bob Smith", course: "CS 301", lastActivity: "1 day ago", grade: 78, status: "good" },
    { name: "Carol Davis", course: "CS 401", lastActivity: "3 hours ago", grade: 95, status: "excellent" },
    { name: "David Wilson", course: "CS 101", lastActivity: "2 days ago", grade: 65, status: "needs-attention" },
    { name: "Eva Brown", course: "CS 301", lastActivity: "1 hour ago", grade: 88, status: "good" }
  ]

  const recentSubmissions = [
    { student: "Alice Johnson", assignment: "React Components Lab", course: "CS 301", submitted: "1 hour ago", status: "pending" },
    { student: "Bob Smith", assignment: "Database Design Project", course: "CS 401", submitted: "3 hours ago", status: "graded" },
    { student: "Carol Davis", assignment: "JavaScript Quiz", course: "CS 101", submitted: "1 day ago", status: "graded" },
    { student: "David Wilson", assignment: "Final Project Proposal", course: "CS 401", submitted: "2 days ago", status: "pending" }
  ]

  const upcomingDeadlines = [
    { title: "Midterm Exam Grading", course: "CS 101", due: "Tomorrow", type: "grading" },
    { title: "Project Proposal Reviews", course: "CS 401", due: "3 days", type: "review" },
    { title: "Weekly Quiz Creation", course: "CS 301", due: "5 days", type: "creation" },
    { title: "Grade Report Submission", course: "All", due: "1 week", type: "admin" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-blue-600 bg-blue-100'
      case 'needs-attention': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getSubmissionStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'late': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Staff Dashboard</h1>
          <p className="text-muted-foreground">Monitor student progress and manage your courses</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Course</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="semester">This Semester</option>
            </select>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-card-foreground">{performanceMetrics.totalStudents}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiUsers className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Grade</p>
                <p className="text-2xl font-bold text-card-foreground">{performanceMetrics.averageGrade}%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold text-card-foreground">{performanceMetrics.completionRate}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FiTarget className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Assignments</p>
                <p className="text-2xl font-bold text-card-foreground">{performanceMetrics.activeAssignments}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <FiBook className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Performance */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-card-foreground">Student Performance</h3>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {studentPerformance.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.course}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {student.lastActivity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-card-foreground">{student.grade}%</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                      {student.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-card-foreground">Recent Submissions</h3>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {recentSubmissions.map((submission, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-card-foreground">{submission.assignment}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubmissionStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">by {submission.student}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-accent font-medium">{submission.course}</p>
                    <p className="text-xs text-muted-foreground">{submission.submitted}</p>
                  </div>
                  {submission.status === 'pending' && (
                    <div className="flex space-x-2 mt-3">
                      <button className="flex items-center space-x-1 px-3 py-1 bg-primary text-primary-foreground rounded text-xs hover:bg-primary/90">
                        <FiEye className="w-3 h-3" />
                        <span>Review</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 bg-accent text-accent-foreground rounded text-xs hover:bg-accent/90">
                        <FiEdit className="w-3 h-3" />
                        <span>Grade</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="mt-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Upcoming Deadlines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <FiCalendar className="w-4 h-4 text-primary" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      deadline.type === 'grading' ? 'bg-red-100 text-red-800' :
                      deadline.type === 'review' ? 'bg-blue-100 text-blue-800' :
                      deadline.type === 'creation' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {deadline.type}
                    </span>
                  </div>
                  <h4 className="font-medium text-card-foreground mb-1">{deadline.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">Due in {deadline.due}</p>
                  <p className="text-xs text-accent font-medium">{deadline.course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

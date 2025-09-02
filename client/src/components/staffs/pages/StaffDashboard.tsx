'use client'

import { useState } from 'react'
import { FiUsers, FiTrendingUp, FiBook, FiTarget, FiCalendar, FiClock, FiEdit, FiEye, FiFilter, FiArrowRight, FiCheckCircle, FiAlertCircle, FiAward } from 'react-icons/fi'

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

  const getDeadlineColor = (type: string) => {
    switch (type) {
      case 'grading': return 'bg-red-100 text-red-800'
      case 'review': return 'bg-blue-100 text-blue-800'
      case 'creation': return 'bg-green-100 text-green-800'
      case 'admin': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Staff Dashboard</h1>
          <p className="text-blue-600">Monitor student progress and manage your courses</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 items-end">
          <div className="flex items-center">
            <FiFilter className="text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700 mr-2">Filter by:</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">Course</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-2">Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="semester">This Semester</option>
            </select>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Total Students</p>
                <p className="text-2xl font-bold text-blue-800">{performanceMetrics.totalStudents}</p>
                <p className="text-xs text-blue-500 mt-1">Across all courses</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiUsers className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Average Grade</p>
                <p className="text-2xl font-bold text-blue-800">{performanceMetrics.averageGrade}%</p>
                <p className="text-xs text-blue-500 mt-1">Class average</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Completion Rate</p>
                <p className="text-2xl font-bold text-blue-800">{performanceMetrics.completionRate}%</p>
                <p className="text-xs text-blue-500 mt-1">Assignments completed</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FiTarget className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Active Assignments</p>
                <p className="text-2xl font-bold text-blue-800">{performanceMetrics.activeAssignments}</p>
                <p className="text-xs text-blue-500 mt-1">Require attention</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <FiBook className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Performance */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-blue-800 flex items-center">
                <FiAward className="mr-2 text-blue-600" />
                Student Performance
              </h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View All <FiArrowRight className="ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {studentPerformance.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">{student.name}</p>
                      <p className="text-sm text-blue-600">{student.course}</p>
                      <p className="text-xs text-blue-500 flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {student.lastActivity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-800">{student.grade}%</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                      {student.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-blue-800 flex items-center">
                <FiBook className="mr-2 text-blue-600" />
                Recent Submissions
              </h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View All <FiArrowRight className="ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {recentSubmissions.map((submission, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-blue-800">{submission.assignment}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubmissionStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 mb-1">by {submission.student}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-500 font-medium">{submission.course}</p>
                    <p className="text-xs text-blue-500">{submission.submitted}</p>
                  </div>
                  {submission.status === 'pending' && (
                    <div className="flex space-x-2 mt-3">
                      <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                        <FiEye className="w-3 h-3" />
                        <span>Review</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700">
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
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
              <FiCalendar className="mr-2 text-blue-600" />
              Upcoming Deadlines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDeadlineColor(deadline.type)}`}>
                      {deadline.type}
                    </span>
                  </div>
                  <h4 className="font-medium text-blue-800 mb-1">{deadline.title}</h4>
                  <div className="flex items-center text-blue-600 text-sm mb-1">
                    <FiClock className="mr-1 w-4 h-4" />
                    Due in {deadline.due}
                  </div>
                  <p className="text-xs text-blue-500 font-medium">{deadline.course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="p-2 bg-blue-100 rounded-lg mb-2">
                  <FiEdit className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-blue-800">Create Quiz</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="p-2 bg-green-100 rounded-lg mb-2">
                  <FiBook className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-green-800">Upload Materials</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="p-2 bg-purple-100 rounded-lg mb-2">
                  <FiUsers className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-purple-800">Student Reports</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div className="p-2 bg-orange-100 rounded-lg mb-2">
                  <FiCalendar className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-orange-800">Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
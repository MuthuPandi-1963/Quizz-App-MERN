"use client"

import type React from "react"
import { useState } from "react"
import {
  FiUsers,
  FiBookOpen,
  FiBarChart2,
  FiSettings,
  FiSearch,
  FiFilter,
  FiDownload,
  FiMoreVertical,
  FiEdit,
  FiTrash2,
  FiEye,
  FiPlus,
} from "react-icons/fi"

interface User {
  id: string
  name: string
  email: string
  role: "student" | "staff"
  status: "active" | "inactive"
  joinDate: string
  lastActive: string
}

interface Course {
  id: string
  title: string
  instructor: string
  students: number
  status: "active" | "draft"
  createdDate: string
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"users" | "courses" | "reports" | "settings">("users")
  const [searchTerm, setSearchTerm] = useState("")

  const users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "student",
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Dr. Smith",
      email: "smith@example.com",
      role: "staff",
      status: "active",
      joinDate: "2023-08-20",
      lastActive: "1 hour ago",
    },
    {
      id: "3",
      name: "Jane Wilson",
      email: "jane@example.com",
      role: "student",
      status: "inactive",
      joinDate: "2024-02-10",
      lastActive: "2 days ago",
    },
    {
      id: "4",
      name: "Prof. Johnson",
      email: "johnson@example.com",
      role: "staff",
      status: "active",
      joinDate: "2023-09-05",
      lastActive: "30 minutes ago",
    },
  ]

  const courses: Course[] = [
    {
      id: "1",
      title: "Advanced Mathematics",
      instructor: "Dr. Smith",
      students: 45,
      status: "active",
      createdDate: "2024-01-10",
    },
    {
      id: "2",
      title: "Computer Science Fundamentals",
      instructor: "Prof. Johnson",
      students: 67,
      status: "active",
      createdDate: "2024-01-15",
    },
    {
      id: "3",
      title: "Physics Laboratory",
      instructor: "Dr. Brown",
      students: 23,
      status: "draft",
      createdDate: "2024-02-01",
    },
  ]

  const tabs = [
    { id: "users", label: "User Management", icon: FiUsers },
    { id: "courses", label: "Course Management", icon: FiBookOpen },
    { id: "reports", label: "Reports & Analytics", icon: FiBarChart2 },
    { id: "settings", label: "System Settings", icon: FiSettings },
  ]

  const renderUserManagement = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage students and staff members</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <FiPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <FiFilter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <FiDownload className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === "staff"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{user.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-purple-600 hover:text-purple-700">
                        <FiEye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        <FiEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderCourseManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage courses and curriculum</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <FiPlus className="w-4 h-4" />
          <span>Add Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <FiMoreVertical className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{course.students} students enrolled</p>
            <div className="flex items-center justify-between">
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  course.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}
              >
                {course.status}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{course.createdDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h2>
        <p className="text-gray-600 dark:text-gray-400">System performance and usage analytics</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
        <FiBarChart2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Analytics Dashboard</h3>
        <p className="text-gray-600 dark:text-gray-400">Detailed reports and analytics will be displayed here</p>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Settings</h2>
        <p className="text-gray-600 dark:text-gray-400">Configure system preferences and settings</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
        <FiSettings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">System Configuration</h3>
        <p className="text-gray-600 dark:text-gray-400">
          System settings and configuration options will be displayed here
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "users" && renderUserManagement()}
        {activeTab === "courses" && renderCourseManagement()}
        {activeTab === "reports" && renderReports()}
        {activeTab === "settings" && renderSettings()}
      </div>
    </div>
  )
}

export default AdminDashboard

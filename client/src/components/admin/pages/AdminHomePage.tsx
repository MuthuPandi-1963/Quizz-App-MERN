"use client"

import type React from "react"
import {
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiTrendingUp,
  FiSettings,
  FiBarChart2,
  FiCalendar,
  FiAlertCircle,
  FiActivity,
} from "react-icons/fi"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  trend: "up" | "down"
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
        <p className={`text-sm mt-2 flex items-center ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      </div>
      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">{icon}</div>
    </div>
  </div>
)

const AdminHomePage: React.FC = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12% from last month",
      icon: <FiUsers className="w-6 h-6 text-purple-600" />,
      trend: "up" as const,
    },
    {
      title: "Active Staff",
      value: "156",
      change: "+3% from last month",
      icon: <FiUserCheck className="w-6 h-6 text-purple-600" />,
      trend: "up" as const,
    },
    {
      title: "Total Courses",
      value: "89",
      change: "+8% from last month",
      icon: <FiBookOpen className="w-6 h-6 text-purple-600" />,
      trend: "up" as const,
    },
    {
      title: "System Performance",
      value: "98.5%",
      change: "+0.5% from last week",
      icon: <FiTrendingUp className="w-6 h-6 text-purple-600" />,
      trend: "up" as const,
    },
  ]

  const recentActivities = [
    { action: "New student registration", user: "John Doe", time: "2 minutes ago", type: "user" },
    { action: "Course material uploaded", user: "Dr. Smith", time: "15 minutes ago", type: "content" },
    { action: "System backup completed", user: "System", time: "1 hour ago", type: "system" },
    { action: "Staff member added", user: "Jane Wilson", time: "2 hours ago", type: "user" },
    { action: "Performance report generated", user: "System", time: "3 hours ago", type: "report" },
  ]

  const alerts = [
    { message: "Server maintenance scheduled for tonight", type: "warning", time: "1 hour ago" },
    { message: "New feature update available", type: "info", time: "2 hours ago" },
    { message: "Backup storage 85% full", type: "warning", time: "4 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <FiSettings className="w-4 h-4" />
                <span>System Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <FiActivity className="w-5 h-5 mr-2 text-purple-600" />
                    Recent Activities
                  </h2>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">View All</button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-full ${
                          activity.type === "user"
                            ? "bg-blue-100 dark:bg-blue-900/30"
                            : activity.type === "content"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : activity.type === "system"
                                ? "bg-yellow-100 dark:bg-yellow-900/30"
                                : "bg-purple-100 dark:bg-purple-900/30"
                        }`}
                      >
                        {activity.type === "user" ? (
                          <FiUsers className="w-4 h-4 text-blue-600" />
                        ) : activity.type === "content" ? (
                          <FiBookOpen className="w-4 h-4 text-green-600" />
                        ) : activity.type === "system" ? (
                          <FiSettings className="w-4 h-4 text-yellow-600" />
                        ) : (
                          <FiBarChart2 className="w-4 h-4 text-purple-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Alerts & Quick Actions */}
          <div className="space-y-6">
            {/* System Alerts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <FiAlertCircle className="w-5 h-5 mr-2 text-purple-600" />
                  System Alerts
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === "warning"
                          ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400"
                          : "bg-blue-50 dark:bg-blue-900/20 border-blue-400"
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                    <FiUsers className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Manage Users</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                    <FiBarChart2 className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">View Reports</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                    <FiSettings className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">System Settings</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                    <FiCalendar className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Schedule Maintenance</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHomePage

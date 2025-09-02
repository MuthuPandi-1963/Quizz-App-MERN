'use client'
import { FiUpload, FiEdit, FiUsers, FiBarChart2, FiCalendar, FiClock, FiBook, FiHome, FiCheckCircle, FiAlertCircle, FiAward, FiMessageSquare, FiBell, FiChevronRight } from 'react-icons/fi'

interface StaffHomePageProps {
  staffName?: string
}

export default function StaffHomePage({ staffName = "Dr. Sarah Wilson" }: StaffHomePageProps) {
  const quickActions = [
    {
      title: "Upload Materials",
      description: "Add new course content",
      icon: FiUpload,
      href: "/staff/materials/upload",
      color: "bg-blue-500",
      count: "12 pending"
    },
    {
      title: "Create Quiz",
      description: "Design new assessments",
      icon: FiEdit,
      href: "/staff/quiz/create",
      color: "bg-green-500",
      count: "3 drafts"
    },
    {
      title: "Student Performance",
      description: "Review progress",
      icon: FiBarChart2,
      href: "/staff/performance",
      color: "bg-purple-500",
      count: "45 students"
    },
    {
      title: "Manage Classes",
      description: "Course administration",
      icon: FiUsers,
      href: "/staff/classes",
      color: "bg-orange-500",
      count: "3 active"
    }
  ]

  const recentActivities = [
    { title: "Graded JavaScript Quiz - Section A", time: "2 hours ago", status: "completed", students: 28 },
    { title: "Uploaded React Components Tutorial", time: "1 day ago", status: "published", students: null },
    { title: "Created Database Design Assignment", time: "2 days ago", status: "draft", students: null },
    { title: "Reviewed Final Project Submissions", time: "3 days ago", status: "completed", students: 15 }
  ]

  const upcomingTasks = [
    { title: "Grade Midterm Exams", due: "Tomorrow", priority: "high", course: "CS 101" },
    { title: "Prepare Advanced React Lecture", due: "2 days", priority: "medium", course: "CS 301" },
    { title: "Review Project Proposals", due: "1 week", priority: "medium", course: "CS 401" },
    { title: "Submit Grade Reports", due: "1 week", priority: "high", course: "All Courses" }
  ]

  const classStats = [
    { course: "CS 101 - Intro to Programming", students: 45, avgGrade: "B+", completion: 78 },
    { course: "CS 301 - Advanced React", students: 28, avgGrade: "A-", completion: 85 },
    { course: "CS 401 - Senior Project", students: 15, avgGrade: "A", completion: 92 }
  ]

  const todaysSchedule = [
    { title: "CS 101 Lecture", time: "10:00 AM - 11:30 AM", type: "lecture", location: "Room 301" },
    { title: "Office Hours", time: "2:00 PM - 4:00 PM", type: "office", location: "Faculty Office" },
    { title: "CS 301 Lab", time: "4:30 PM - 6:00 PM", type: "lab", location: "Computer Lab B" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {staffName}!</h1>
              <p className="text-xl opacity-90">Ready to inspire and educate your students?</p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold">88</div>
                <div className="text-sm opacity-80">Active Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Actions Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
            <FiHome className="mr-2 text-blue-600" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer border border-blue-100 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${action.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {action.count}
                    </span>
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                  <p className="text-sm text-blue-600">{action.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-blue-100 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiClock className="mr-2 text-blue-600" />
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'completed' ? 'bg-green-500' :
                        activity.status === 'published' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-blue-800">{activity.title}</p>
                        <p className="text-sm text-blue-600 flex items-center">
                          <FiClock className="w-4 h-4 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                        activity.status === 'published' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.status}
                      </span>
                      {activity.students && (
                        <p className="text-xs text-blue-600 mt-1">{activity.students} students</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class Statistics */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBook className="mr-2 text-blue-600" />
                Class Overview
              </h3>
              <div className="space-y-4">
                {classStats.map((classItem, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-blue-800">{classItem.course}</h4>
                      <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {classItem.avgGrade}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-blue-600 mb-2">
                      <span>{classItem.students} students</span>
                      <span>{classItem.completion}% completion</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${classItem.completion}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiCalendar className="mr-2 text-blue-600" />
                Upcoming Tasks
              </h3>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-blue-800">{task.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 mb-1">Due in {task.due}</p>
                    <p className="text-xs text-blue-500 font-medium">{task.course}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBarChart2 className="mr-2 text-blue-600" />
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">Total Students</span>
                  <span className="font-semibold text-blue-800">88</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">Active Courses</span>
                  <span className="font-semibold text-blue-800">3</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">Pending Grades</span>
                  <span className="font-semibold text-blue-800">12</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">This Week's Classes</span>
                  <span className="font-semibold text-blue-800">8</span>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiCalendar className="mr-2 text-blue-600" />
                Today's Schedule
              </h3>
              <div className="space-y-3">
                {todaysSchedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      item.type === 'lecture' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'office' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {item.type === 'lecture' ? <FiBook className="w-4 h-4" /> :
                       item.type === 'office' ? <FiUsers className="w-4 h-4" /> :
                       <FiBarChart2 className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-blue-800">{item.title}</p>
                      <p className="text-sm text-blue-600">{item.time}</p>
                      <p className="text-xs text-blue-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBell className="mr-2 text-blue-600" />
                Notifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="p-1 bg-blue-100 rounded-full">
                    <FiMessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-800">New messages from students</p>
                    <p className="text-sm text-blue-600">5 unread messages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="p-1 bg-green-100 rounded-full">
                    <FiCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-800">System update completed</p>
                    <p className="text-sm text-blue-600">New features available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="p-1 bg-yellow-100 rounded-full">
                    <FiAlertCircle className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-blue-800">Upcoming maintenance</p>
                    <p className="text-sm text-blue-600">Scheduled for this weekend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
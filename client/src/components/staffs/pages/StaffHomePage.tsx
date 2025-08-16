'use client'
import { FiUpload, FiEdit, FiUsers, FiBarChart2, FiCalendar, FiClock,  FiBook } from 'react-icons/fi'

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
      color: "bg-green-500",
      count: "12 pending"
    },
    {
      title: "Create Quiz",
      description: "Design new assessments",
      icon: FiEdit,
      href: "/staff/quiz/create",
      color: "bg-blue-500",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {staffName}!</h1>
              <p className="text-xl opacity-90">Ready to inspire and educate your students?</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">88</div>
                  <div className="text-sm opacity-80">Active Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Actions Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${action.color} text-white`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-medium">
                    {action.count}
                  </span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'completed' ? 'bg-green-500' :
                        activity.status === 'published' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-card-foreground">{activity.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
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
                        <p className="text-xs text-muted-foreground mt-1">{activity.students} students</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Class Statistics */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Class Overview</h3>
              <div className="space-y-4">
                {classStats.map((classItem, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-card-foreground">{classItem.course}</h4>
                      <span className="text-sm font-semibold text-primary">{classItem.avgGrade}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>{classItem.students} students</span>
                      <span>{classItem.completion}% completion</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
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
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Upcoming Tasks</h3>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-card-foreground">{task.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Due in {task.due}</p>
                    <p className="text-xs text-accent font-medium">{task.course}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-semibold text-card-foreground">88</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Courses</span>
                  <span className="font-semibold text-card-foreground">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Pending Grades</span>
                  <span className="font-semibold text-card-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">This Week's Classes</span>
                  <span className="font-semibold text-card-foreground">8</span>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Today's Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <FiCalendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">CS 101 Lecture</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <FiUsers className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Office Hours</p>
                    <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <FiBook className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">CS 301 Lab</p>
                    <p className="text-sm text-muted-foreground">4:30 PM - 6:00 PM</p>
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

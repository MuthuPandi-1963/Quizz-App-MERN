'use client'
import { FiBook, FiTarget, FiCode, FiTrendingUp, FiPlay, FiClock, FiStar } from 'react-icons/fi'
import { useOutletContext } from 'react-router-dom'
import type { AuthState } from '../../../store/slices/AuthSlice'


export default function StudentHomePage() {
  const {data} = useOutletContext<AuthState>()
  const quickAccessItems = [
    {
      title: "Study Materials",
      description: "Access your course content",
      icon: FiBook,
      progress: 75,
      href: "/student/materials",
      color: "bg-blue-500"
    },
    {
      title: "Aptitude Quiz",
      description: "Test your knowledge",
      icon: FiTarget,
      progress: 60,
      href: "/student/aptitude",
      color: "bg-green-500"
    },
    {
      title: "Coding Challenges",
      description: "Practice programming",
      icon: FiCode,
      progress: 45,
      href: "/student/coding",
      color: "bg-purple-500"
    },
    {
      title: "Performance",
      description: "Track your progress",
      icon: FiTrendingUp,
      progress: 80,
      href: "/student/results",
      color: "bg-orange-500"
    }
  ]

  const recentActivities = [
    { title: "Completed JavaScript Basics Quiz", time: "2 hours ago", score: "85%" },
    { title: "Submitted Array Sorting Challenge", time: "1 day ago", score: "92%" },
    { title: "Reviewed Data Structures Notes", time: "2 days ago", score: null },
    { title: "Participated in Weekly Contest", time: "3 days ago", score: "78%" }
  ]

  const upcomingDeadlines = [
    { title: "React Components Assignment", due: "Tomorrow", priority: "high" },
    { title: "Database Design Quiz", due: "3 days", priority: "medium" },
    { title: "Final Project Submission", due: "1 week", priority: "high" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl  font-bold mb-2">Welcome back,<span className='text-yellow-300 font-bold'> {data.full_name}!</span></h1>
              <p className="text-xl opacity-90">Ready to continue your learning journey?</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">78%</div>
                  <div className="text-sm opacity-80">Overall Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Access Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${item.color} text-white`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <FiPlay className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">{item.progress}% Complete</div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="font-medium text-card-foreground">{activity.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <FiClock className="w-4 h-4 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    {activity.score && (
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold text-card-foreground">{activity.score}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div>
            <div className="bg-card rounded-lg p-6 border border-border mb-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Upcoming Deadlines</h3>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-card-foreground">{deadline.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deadline.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {deadline.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Due in {deadline.due}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Quizzes Completed</span>
                  <span className="font-semibold text-card-foreground">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Coding Challenges</span>
                  <span className="font-semibold text-card-foreground">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Rank</span>
                  <span className="font-semibold text-card-foreground">#12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Study Streak</span>
                  <span className="font-semibold text-card-foreground">7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
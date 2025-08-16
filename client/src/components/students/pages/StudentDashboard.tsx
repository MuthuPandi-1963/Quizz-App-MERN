'use client'

import { useState } from 'react'
import { FiTrendingUp, FiTarget, FiCode, FiBook, FiAward, FiCalendar, FiClock, FiUsers } from 'react-icons/fi'

export default function StudentDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const performanceData = {
    week: { quizzes: 85, coding: 78, overall: 82 },
    month: { quizzes: 88, coding: 82, overall: 85 },
    semester: { quizzes: 86, coding: 80, overall: 83 }
  }

  const recentScores = [
    { subject: "JavaScript Fundamentals", score: 92, date: "2024-01-15", type: "quiz" },
    { subject: "Array Algorithms", score: 88, date: "2024-01-14", type: "coding" },
    { subject: "React Components", score: 95, date: "2024-01-12", type: "quiz" },
    { subject: "Binary Search", score: 85, date: "2024-01-10", type: "coding" },
    { subject: "Database Queries", score: 90, date: "2024-01-08", type: "quiz" }
  ]

  const achievements = [
    { title: "Quiz Master", description: "Scored 90+ on 5 consecutive quizzes", icon: FiTarget, earned: true },
    { title: "Code Warrior", description: "Solved 50 coding challenges", icon: FiCode, earned: true },
    { title: "Study Streak", description: "7 days of continuous learning", icon: FiBook, earned: true },
    { title: "Top Performer", description: "Rank in top 10 this month", icon: FiAward, earned: false }
  ]

  const upcomingEvents = [
    { title: "Advanced JavaScript Quiz", date: "2024-01-20", time: "10:00 AM", type: "quiz" },
    { title: "Coding Contest", date: "2024-01-22", time: "2:00 PM", type: "contest" },
    { title: "React Workshop", date: "2024-01-25", time: "11:00 AM", type: "workshop" }
  ]

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">Track your learning progress and achievements</p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-card-foreground">Performance Overview</h2>
                <div className="flex space-x-2">
                  {['week', 'month', 'semester'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        selectedPeriod === period
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentData.quizzes / 100)}`}
                        className="text-blue-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-card-foreground">{currentData.quizzes}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-card-foreground">Quiz Performance</h3>
                  <p className="text-sm text-muted-foreground">Average score</p>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentData.coding / 100)}`}
                        className="text-green-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-card-foreground">{currentData.coding}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-card-foreground">Coding Challenges</h3>
                  <p className="text-sm text-muted-foreground">Success rate</p>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentData.overall / 100)}`}
                        className="text-purple-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-card-foreground">{currentData.overall}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-card-foreground">Overall Progress</h3>
                  <p className="text-sm text-muted-foreground">Combined score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FiTrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Rank</p>
                  <p className="text-xl font-bold text-card-foreground">#12</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiUsers className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Study Group</p>
                  <p className="text-xl font-bold text-card-foreground">8 Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Scores */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Recent Scores</h3>
            <div className="space-y-4">
              {recentScores.map((score, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      score.type === 'quiz' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {score.type === 'quiz' ? <FiTarget className="w-4 h-4" /> : <FiCode className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">{score.subject}</p>
                      <p className="text-sm text-muted-foreground">{score.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-card-foreground">{score.score}%</p>
                    <p className="text-sm text-muted-foreground capitalize">{score.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Upcoming Events */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-muted'
                  }`}>
                    <div className={`p-2 rounded-lg ${
                      achievement.earned ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <achievement.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${
                        achievement.earned ? 'text-green-800' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </p>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-green-600' : 'text-muted-foreground'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <FiAward className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FiCalendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground">{event.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {event.date} at {event.time}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'quiz' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'contest' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
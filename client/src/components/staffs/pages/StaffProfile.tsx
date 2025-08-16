"use client"

import { useState } from "react"
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiEdit3,
  FiSave,
  FiX,
  FiCamera,
  FiAward,
  FiBook,
  FiBell,
  FiLock,
  FiGlobe,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi"

export default function StaffProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  const [profileData, setProfileData] = useState({
    fullName: "Dr. Sarah Wilson",
    email: "sarah.wilson@university.edu",
    phone: "+1 (555) 987-6543",
    location: "Boston, MA",
    dateOfBirth: "1985-03-22",
    employeeId: "FAC2019001",
    department: "Computer Science",
    position: "Associate Professor",
    officeLocation: "Science Building, Room 301",
    officeHours: "Mon-Wed-Fri: 2:00 PM - 4:00 PM",
    bio: "Experienced computer science educator with expertise in web development, software engineering, and artificial intelligence. Passionate about inspiring the next generation of developers.",
  })

  const teachingStats = [
    { label: "Years Teaching", value: "8", change: "Since 2016" },
    { label: "Total Students Taught", value: "1,200+", change: "Across all courses" },
    { label: "Current Students", value: "88", change: "This semester" },
    { label: "Course Rating", value: "4.8/5", change: "Student evaluations" },
  ]

  const courses = [
    { code: "CS 101", name: "Introduction to Programming", students: 45, semester: "Fall 2024" },
    { code: "CS 301", name: "Advanced React Development", students: 28, semester: "Fall 2024" },
    { code: "CS 401", name: "Senior Capstone Project", students: 15, semester: "Fall 2024" },
  ]

  const achievements = [
    { title: "Excellence in Teaching Award", date: "2023", icon: FiAward },
    { title: "Best Faculty Mentor", date: "2022", icon: FiUsers },
    { title: "Research Publication Award", date: "2021", icon: FiBook },
    { title: "Innovation in Education", date: "2020", icon: FiTrendingUp },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data if needed
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Staff Profile</h1>
          <p className="text-muted-foreground">Manage your professional information and teaching portfolio</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-card rounded-lg p-6 border border-border mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                SW
              </div>
              <button className="absolute -bottom-1 -right-1 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                <FiCamera className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-card-foreground">{profileData.fullName}</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <FiEdit3 className="w-4 h-4" />
                  <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
                </button>
              </div>
              <p className="text-muted-foreground mb-2">Employee ID: {profileData.employeeId}</p>
              <p className="text-card-foreground">
                {profileData.position} • {profileData.department}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-card-foreground">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-card-foreground">{profileData.officeLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
          {[
            { id: "profile", label: "Personal Info", icon: FiUser },
            { id: "teaching", label: "Teaching", icon: FiBook },
            { id: "achievements", label: "Achievements", icon: FiAward },
            { id: "settings", label: "Settings", icon: FiBell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Office Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.officeLocation}
                      onChange={(e) => setProfileData({ ...profileData, officeLocation: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.officeLocation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Office Hours</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.officeHours}
                      onChange={(e) => setProfileData({ ...profileData, officeHours: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.officeHours}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FiSave className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Professional Bio</h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  placeholder="Tell us about your professional background and expertise..."
                />
              ) : (
                <p className="text-card-foreground leading-relaxed">{profileData.bio}</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "teaching" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Teaching Statistics</h3>
              <div className="space-y-6">
                {teachingStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-card-foreground">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.change}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Current Courses</h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-card-foreground">{course.code}</h4>
                      <span className="text-sm font-medium text-primary">{course.students} students</span>
                    </div>
                    <p className="text-sm text-card-foreground mb-1">{course.name}</p>
                    <p className="text-xs text-muted-foreground">{course.semester}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { label: "Student Submissions", description: "Get notified when students submit assignments" },
                  { label: "Grade Deadlines", description: "Reminders for grading deadlines" },
                  { label: "Course Updates", description: "Notifications about course changes" },
                  { label: "System Announcements", description: "Important system-wide updates" },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium text-card-foreground">{setting.label}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Account Security</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FiLock className="w-5 h-5 text-muted-foreground" />
                    <div className="text-left">
                      <p className="font-medium text-card-foreground">Change Password</p>
                      <p className="text-sm text-muted-foreground">Update your account password</p>
                    </div>
                  </div>
                  <FiEdit3 className="w-4 h-4 text-muted-foreground" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FiGlobe className="w-5 h-5 text-muted-foreground" />
                    <div className="text-left">
                      <p className="font-medium text-card-foreground">Privacy Settings</p>
                      <p className="text-sm text-muted-foreground">Manage your profile visibility</p>
                    </div>
                  </div>
                  <FiEdit3 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

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
  FiCalendar,
  FiPhone,
  FiBriefcase,
  FiClock,
  FiStar,
  FiSettings,
  FiDownload,
  FiEye,
  FiEyeOff
} from "react-icons/fi"

export default function StaffProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)

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
    password: "********"
  })

  const teachingStats = [
    { label: "Years Teaching", value: "8", change: "Since 2016", icon: FiCalendar },
    { label: "Total Students Taught", value: "1,200+", change: "Across all courses", icon: FiUsers },
    { label: "Current Students", value: "88", change: "This semester", icon: FiUser },
    { label: "Course Rating", value: "4.8/5", change: "Student evaluations", icon: FiStar },
  ]

  const courses = [
    { code: "CS 101", name: "Introduction to Programming", students: 45, semester: "Fall 2024", progress: 85 },
    { code: "CS 301", name: "Advanced React Development", students: 28, semester: "Fall 2024", progress: 60 },
    { code: "CS 401", name: "Senior Capstone Project", students: 15, semester: "Fall 2024", progress: 40 },
  ]

  const achievements = [
    { title: "Excellence in Teaching Award", date: "2023", icon: FiAward },
    { title: "Best Faculty Mentor", date: "2022", icon: FiUsers },
    { title: "Research Publication Award", date: "2021", icon: FiBook },
    { title: "Innovation in Education", date: "2020", icon: FiTrendingUp },
  ]

  const notifications = [
    { label: "Student Submissions", description: "Get notified when students submit assignments", enabled: true },
    { label: "Grade Deadlines", description: "Reminders for grading deadlines", enabled: true },
    { label: "Course Updates", description: "Notifications about course changes", enabled: false },
    { label: "System Announcements", description: "Important system-wide updates", enabled: true },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Staff Profile</h1>
          <p className="text-blue-600">Manage your professional information and teaching portfolio</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                SW
              </div>
              <button className="absolute -bottom-1 -right-1 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md">
                <FiCamera className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-blue-800">{profileData.fullName}</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-2 md:mt-0"
                >
                  <FiEdit3 className="w-4 h-4" />
                  <span>{isEditing ? "Cancel Editing" : "Edit Profile"}</span>
                </button>
              </div>
              <p className="text-blue-600 mb-2">Employee ID: {profileData.employeeId}</p>
              <p className="text-blue-800">
                {profileData.position} • {profileData.department}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-800">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-800">{profileData.officeLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-blue-100 p-1 rounded-xl">
          {[
            { id: "profile", label: "Personal Info", icon: FiUser },
            { id: "teaching", label: "Teaching", icon: FiBook },
            { id: "achievements", label: "Achievements", icon: FiAward },
            { id: "settings", label: "Settings", icon: FiSettings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-blue-600 hover:text-blue-700"
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
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiUser className="mr-2 text-blue-600" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-blue-900">{profileData.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-blue-900">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center text-blue-900">
                      <FiPhone className="mr-2 text-blue-600" />
                      {profileData.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Office Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.officeLocation}
                      onChange={(e) => setProfileData({ ...profileData, officeLocation: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center text-blue-900">
                      <FiMapPin className="mr-2 text-blue-600" />
                      {profileData.officeLocation}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Office Hours</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.officeHours}
                      onChange={(e) => setProfileData({ ...profileData, officeHours: e.target.value })}
                      className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center text-blue-900">
                      <FiClock className="mr-2 text-blue-600" />
                      {profileData.officeHours}
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FiSave className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBriefcase className="mr-2 text-blue-600" />
                Professional Bio
              </h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your professional background and expertise..."
                />
              ) : (
                <p className="text-blue-900 leading-relaxed">{profileData.bio}</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "teaching" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiTrendingUp className="mr-2 text-blue-600" />
                Teaching Statistics
              </h3>
              <div className="space-y-6">
                {teachingStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-lg mr-4">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-blue-800">{stat.label}</p>
                          <p className="text-sm text-blue-600">{stat.change}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBook className="mr-2 text-blue-600" />
                Current Courses
              </h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-800">{course.code}</h4>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {course.students} students
                      </span>
                    </div>
                    <p className="text-sm text-blue-900 mb-3">{course.name}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-blue-600">{course.semester}</p>
                      <div className="w-24 bg-blue-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
              <FiAward className="mr-2 text-blue-600" />
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">{achievement.title}</h4>
                    <p className="text-sm text-blue-600">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">Export Achievements</h4>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FiDownload className="w-4 h-4" />
                <span>Download as PDF</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiBell className="mr-2 text-blue-600" />
                Notification Settings
              </h3>
              <div className="space-y-4">
                {notifications.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800">{setting.label}</p>
                      <p className="text-sm text-blue-600">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={setting.enabled} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                <FiLock className="mr-2 text-blue-600" />
                Account Security
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Password</label>
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={profileData.password}
                      className="flex-1 px-3 py-2 border border-blue-200 rounded-lg bg-white text-blue-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={!isEditing}
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-2 p-2 text-blue-600 hover:text-blue-800"
                    >
                      {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                    </button>
                  </div>
                  <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <FiEdit3 className="mr-1 w-4 h-4" />
                    Change Password
                  </button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Two-Factor Authentication</label>
                  <p className="text-sm text-blue-600 mb-3">Add an extra layer of security to your account</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Enable 2FA
                  </button>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Privacy Settings</label>
                  <p className="text-sm text-blue-600 mb-3">Manage your profile visibility and data sharing</p>
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <FiGlobe className="mr-1 w-4 h-4" />
                    Manage Privacy Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
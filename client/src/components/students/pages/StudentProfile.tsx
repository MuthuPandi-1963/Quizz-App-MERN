import { useState } from 'react'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiEdit3, FiSave, FiX, FiCamera, FiAward, FiTrendingUp, FiBell, FiLock, FiGlobe } from 'react-icons/fi'
import { useOutletContext } from 'react-router-dom'
import type { AuthState } from '../../../store/slices/AuthSlice'
import { BiLogOut } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { Modal } from 'antd';
import { useAppDispatch } from '../../interfaces/hook'
import { LogoutThunk } from '../../../store/thunks/auth/LogoutThunk'
export default function StudentProfile() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const {email,full_name,phone,country,dob,username,bio} = useOutletContext<AuthState>().data 
  const [modalText, setModalText] = useState(`Remove Your Account ${username}`);
  const dispatch = useAppDispatch()
  const [profileData, setProfileData] = useState({
    fullName: full_name,
    email,
    phone : phone || "NA",
    location:country || "NA",
    dateOfBirth: dob,
    studentId:username,
    program: "",
    year: '',
    gpa: '3.85',
    bio: bio})
  const achievements = [
    { title: 'Dean\'s List', date: 'Fall 2023', icon: FiAward },
    { title: 'Coding Contest Winner', date: 'Oct 2023', icon: FiTrendingUp },
    { title: 'Perfect Attendance', date: 'Spring 2023', icon: FiCalendar },
    { title: 'Top 10 Student', date: 'Sep 2023', icon: FiUser }
  ]

  const academicStats = [
    { label: 'Courses Completed', value: '24', change: '+2 this semester' },
    { label: 'Current GPA', value: '3.85', change: '+0.15 from last semester' },
    { label: 'Credits Earned', value: '78', change: '42 credits remaining' },
    { label: 'Class Rank', value: '#12', change: 'Top 15%' }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  // const handleCancel = () => {
  //   setIsEditing(false)
  //   // Reset form data if needed
  // }

  const handleOk = async() => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    try {
        const res = await dispatch(LogoutThunk())
        res.payload
    } catch (error) {
      return error;
      
    }finally{
      setConfirmLoading(false);
      setOpen(false)
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and academic progress</p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-card rounded-lg p-6 border border-border mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                AJ
              </div>
              <button className="absolute -bottom-1 -right-1 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                <FiCamera className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-card-foreground mr-3">{profileData.fullName}</h2>
                <button
                  onClick={() => setIsEditing((prev)=>{
                    setActiveTab("profile")
                    return !prev;
                  })}
                  className="flex items-center space-x-2 px-4 ml-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <FiEdit3 className="w-4 h-4 text-white" />
                  <span className='text-white'>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                </button>
              </div>
              <p className="text-muted-foreground mb-2">Student ID: {profileData.studentId}</p>
              {/* <p className="text-card-foreground">{profileData.program} • {profileData.year} Year</p> */}
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-card-foreground">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-card-foreground">{profileData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
          {[
            { id: 'profile', label: 'Personal Info', icon: FiUser },
            { id: 'academic', label: 'Academic', icon: FiTrendingUp },
            { id: 'achievements', label: 'Achievements', icon: FiAward },
            { id: 'settings', label: 'Settings', icon: FiBell }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
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
                      onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
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
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
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
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Date of Birth</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  ) : (
                    <p className="text-card-foreground">{profileData.dateOfBirth ?new Date(profileData.dateOfBirth ).toLocaleDateString() : "NA"}</p>
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
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Bio</h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows={6}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-card-foreground leading-relaxed">{profileData.bio ?? "NA"}</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Academic Statistics</h3>
              <div className="space-y-6">
                {academicStats.map((stat, index) => (
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
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Program Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Program</span>
                  <span className="font-medium text-card-foreground">{profileData.program}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Academic Year</span>
                  <span className="font-medium text-card-foreground">{profileData.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current GPA</span>
                  <span className="font-medium text-card-foreground">{profileData.gpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student ID</span>
                  <span className="font-medium text-card-foreground">{profileData.studentId}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">Achievements & Awards</h3>
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

        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', description: 'Receive updates via email' },
                  { label: 'Quiz Reminders', description: 'Get notified about upcoming quizzes' },
                  { label: 'Assignment Deadlines', description: 'Reminders for assignment due dates' },
                  { label: 'Grade Updates', description: 'Notifications when grades are posted' }
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
              <h3 className="text-xl font-semibold text-card-foreground mb-6">Privacy & Security</h3>
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
                <button onClick={()=>setOpen(true)} className="w-full flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FaUser className="w-5 h-5 text-red-800" />
                    <div className="text-left">
                      <p className="font-medium text-card-foreground">Logout Account</p>
                      <p className="text-sm text-muted-foreground">Remove your Credentials Temporarily</p>
                    </div>
                  </div>
                  <BiLogOut className="w-4 h-4 text-red-800" />
                </button>
                <Modal
        title={` Are You sure`}
        
        open={open}
        className=''
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}







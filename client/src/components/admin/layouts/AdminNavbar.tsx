import { useState } from "react"
import {
  FiUsers,
  FiUserPlus,
  FiMonitor,
  FiFileText,
  FiSettings,
  FiShield,
  FiBell,
  FiLogOut,
  FiMenu,
  FiX,
  FiDatabase,
} from "react-icons/fi"

interface AdminNavbarProps {
  adminName?: string
  onLogout?: () => void
}

export default  function AdminNavbar({ adminName = "Administrator", onLogout }: AdminNavbarProps)  {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { icon: FiUsers, label: "Manage Students", href: "/admin/students" },
    { icon: FiUserPlus, label: "Manage Staff", href: "/admin/staff" },
    { icon: FiSettings, label: "Staff Assignments", href: "/admin/assignments" },
    { icon: FiMonitor, label: "Monitor Activities", href: "/admin/monitor" },
    { icon: FiFileText, label: "Generate Reports", href: "/admin/reports" },
    { icon: FiShield, label: "System Settings", href: "/admin/system" },
  ]

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <FiDatabase className="text-white text-lg" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">EduPlatform</span>
              <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                Admin
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <item.icon className="mr-2 text-lg" />
                {item.label}
              </a>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button   className="relative">
              <FiBell className="text-lg" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <FiShield className="text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">{adminName}</span>
            </div>

            <button   onClick={onLogout}>
              <FiLogOut className="text-lg" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                <item.icon className="mr-3 text-lg" />
                {item.label}
              </a>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex items-center px-3 py-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <FiShield className="text-purple-600" />
                </div>
                <span className="text-base font-medium text-gray-700">{adminName}</span>
              </div>
              <button  className="w-full justify-start px-3 py-2" onClick={onLogout}>
                <FiLogOut className="mr-3 text-lg" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
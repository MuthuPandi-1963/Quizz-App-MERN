import { useState, useEffect, useRef } from "react";
import {
  FiUpload,
  FiEdit3,
  FiCheckSquare,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiBell,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
  FiBookOpen,
  FiHome,
  FiMessageSquare,
  FiCalendar,
  FiHelpCircle,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";

interface StaffNavbarProps {
  staffName?: string;
  staffRole?: string;
  onLogout?: () => void;
}

export default function StaffNavbar({ 
  staffName = "Dr. Sarah Wilson", 
  staffRole = "Computer Science Professor",
  onLogout 
}: StaffNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { icon: FiHome, label: "Dashboard", href: "/staff/dashboard" },
    { icon: FiUpload, label: "Upload Materials", href: "/staff/upload" },
    { icon: FiEdit3, label: "Create Quiz", href: "/staff/create-quiz" },
    { icon: FiCheckSquare, label: "Evaluate Submissions", href: "/staff/evaluate" },
    { icon: FiBarChart2, label: "Student Performance", href: "/staff/performance" },
    { icon: FiUsers, label: "My Students", href: "/staff/students" },
    { icon: FiCalendar, label: "Schedule", href: "/staff/schedule" },
    { icon: FiMessageSquare, label: "Messages", href: "/staff/messages", badge: 3 },
  ];

  const userMenuItems = [
    { icon: FiUser, label: "My Profile", href: "/staff/profile" },
    { icon: FiSettings, label: "Account Settings", href: "/staff/settings" },
    { icon: FiHelpCircle, label: "Help & Support", href: "/support" },
  ];

  const notifications = [
    { id: 1, text: "New submission from Emily Johnson", time: "10 min ago", read: false },
    { id: 2, text: "Quiz deadline approaching for CS101", time: "1 hour ago", read: false },
    { id: 3, text: "Department meeting scheduled", time: "3 hours ago", read: true },
    { id: 4, text: "New teaching resources available", time: "Yesterday", read: true },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setIsUserDropdownOpen(false);
      setIsNotificationsOpen(false);
    } else {
      setActiveDropdown(dropdown);
      if (dropdown === 'user') {
        setIsUserDropdownOpen(true);
        setIsNotificationsOpen(false);
      } else if (dropdown === 'notifications') {
        setIsNotificationsOpen(true);
        setIsUserDropdownOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FiBookOpen className="text-white text-xl" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">EduPlatform</span>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Staff</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-8 lg:flex items-center space-x-1">
              {navigationItems.slice(0, 3).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <item.icon className="mr-2 text-lg" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              
              {/* More dropdown for desktop */}
              <div className="relative group">
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  More <FiChevronDown className="ml-1" />
                </button>
                <div className="absolute right-0 mt-1 w-60 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {navigationItems.slice(3).map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <item.icon className="mr-3 text-lg" />
                      {item.label}
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs items-center mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses, students..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right side menu */}
          <div className="flex items-center space-x-4">


            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={() => toggleDropdown('notifications')}
                className="relative p-1 text-gray-600 hover:text-blue-600"
              >
                <FiBell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="p-3 border-b border-gray-200 bg-blue-50">
                    <h3 className="text-sm font-medium text-blue-800">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <Link
                        key={notification.id}
                        to="#"
                        className={`block px-4 py-3 text-sm hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                      >
                        <p className="font-medium text-gray-900">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
                    <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-800">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>


            {/* User menu */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => toggleDropdown('user')}
                className="flex items-center text-sm rounded-full focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-medium">
                  {staffName.charAt(0)}
                </div>
                <div className="ml-2 hidden  text-left">
                  <p className="text-sm font-medium text-gray-700">{staffName}</p>
                  <p className="text-xs text-gray-500">{staffRole}</p>
                </div>
                {/* <FiChevronDown className="ml-1 hidden md:block text-gray-400" /> */}
              </button>

              {/* User Dropdown */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{staffName}</p>
                    <p className="text-xs text-gray-500 truncate">{staffRole}</p>
                  </div>
                  
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <item.icon className="mr-3 text-lg" />
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-100"></div>
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FiLogOut className="mr-3 text-lg" />
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          {/* Mobile Search */}
          <div className="px-4 pt-3 pb-2 border-b border-gray-200">
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses, students..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <item.icon className="mr-3 text-lg" />
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
            
            <div className="border-t border-gray-200 pt-2 mt-2">
              {userMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <item.icon className="mr-3 text-lg" />
                  {item.label}
                </a>
              ))}
              <button
                onClick={onLogout}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <FiLogOut className="mr-3 text-lg" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
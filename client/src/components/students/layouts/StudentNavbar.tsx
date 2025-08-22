import { useState } from "react";
import {
  FiBook,
  FiAward,
  FiBell,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import DropdownExample from "../../../utils/DropDownMenu";

interface StudentProps{
  studentName : string
  role : string
}
export default function StudentNavbar({studentName,role}:StudentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { icon: FiAward, label: "Dashboard", href: "/student/dashboard" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FiBook className="text-white text-lg" />
              </div>
              <Link  to={`/${role}`}className="ml-2 text-xl font-bold text-gray-900">EduPlatform</Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <DropdownExample />
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <item.icon className="mr-2 text-lg" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-x-4">
            <button className="relative p-1">
              <FiBell className="text-lg" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </button>

            <Link to={"profile"} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUser className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">{studentName}</span>
            </Link>

            {/* <button onClick={()=>{}} className="p-1">
              <FiLogOut className="text-lg" />
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2">
              <DropdownExample />
            </div>
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="mr-3 text-lg" />
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2">
              <Link to={"profile"} className="flex items-center px-3 py-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FiUser className="text-blue-600" />
                </div>
                <span className="text-base font-medium text-gray-700">{studentName}</span>
              </Link>
              {/* <button 
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                onClick={() => {
                  onLogout?.();
                  setIsMobileMenuOpen(false);
                }}
              >
                <FiLogOut className="mr-3 text-lg" />
                Logout
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
"use client"

import { useState, useEffect } from "react"
import { FiMenu, FiX, FiBook, FiCode, FiUsers, FiLogIn, FiUserPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

interface LandingNavbarProps {
  onLoginClick: () => void
  onSignupClick: () => void
}

export default function Navbar({ onLoginClick, onSignupClick }: LandingNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features", icon: FiBook },
    { name: "Coding Challenges", href: "#coding", icon: FiCode },
    { name: "About Us", href: "#about", icon: FiUsers },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">EduPlatform</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={"/auth/login"}
              onClick={onLoginClick}
              className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <FiLogIn className="w-4 h-4" />
              Login
            </Link>
            <Link to={"/auth/signup"}
              onClick={onSignupClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <FiUserPlus className="w-4 h-4" />
              <span className="w-fit text-nowrap">Sign Up</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary p-2">
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary  px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-4 space-y-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left text-foreground hover:text-primary px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-2"
                >
                    <Link to={"/auth/login"} className="flex gap-x-3 items-center text-black">
                  <FiLogIn className="w-4 h-4" />
                  <span>Login</span>
                    </Link>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                  }}
                  className=" text-nowrap w-full bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 flex items-center gap-2"
                >
                    <Link to={"/auth/signup"} className="flex gap-x-3 items-center text-white">
                  <FiUserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                    </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

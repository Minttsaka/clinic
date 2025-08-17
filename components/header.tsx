"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 shadow-lg">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
                <Avatar>
                    <AvatarImage src="/mubas-logo.png" className={"object-cover"} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-white">Mubas</span>
              <span className="text-xs text-cyan-100 block -mt-1">Clinic System</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-full transition-all"
              >
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-full transition-all">
                  Features
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </div>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-full transition-all"
              >
                Pricing
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-full transition-all"
              >
                About
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-full transition-all"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-white hover:bg-white/20 text-sm px-4 py-2 h-auto">
              Sign In
            </Button>
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 text-sm px-6 py-2 h-auto font-semibold rounded-full shadow-lg">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 py-4 z-50">
            <nav className="flex flex-col space-y-1 px-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg">
                Home
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg">
                Features
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg">
                Pricing
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg">
                About
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-50 rounded-lg">
                Contact
              </a>
              <div className="pt-3 border-t border-gray-200 mt-3">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-cyan-50 text-sm mb-2">
                  Sign In
                </Button>
                <Button className="w-full bg-cyan-500 text-white hover:bg-cyan-600 text-sm">Start Free Trial</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  CalendarPlus,
  FileText,
  Heart,
  Bell,
  User,
  HelpCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

interface MenuItem {
  icon: any
  label: string
  active: boolean
  onClick?: () => void
}

interface DashboardNavProps {
  onNavigate?: (page: string) => void
  onBookAppointment?: () => void
  onShowProfile?: () => void
  onShowNotifications?: () => void
  currentPage?: string
}

export function DashboardNav({
  onNavigate,
  onBookAppointment,
  onShowProfile,
  onShowNotifications,
  currentPage = "dashboard",
}: DashboardNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems: MenuItem[] = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      active: currentPage === "dashboard",
      onClick: () => handleNavigation("dashboard"),
    },
    {
      icon: User,
      label: "My Profile",
      active: currentPage === "profile",
      onClick: () => {
        onShowProfile?.()
        setIsMobileMenuOpen(false)
      },
    },
    {
      icon: CalendarPlus,
      label: "Book Appointment",
      active: false,
      onClick: () => {
        onBookAppointment?.()
        setIsMobileMenuOpen(false)
      },
    },
    {
      icon: Calendar,
      label: "My Appointments",
      active: currentPage === "appointments",
      onClick: () => handleNavigation("appointments"),
    },
    {
      icon: FileText,
      label: "Medical Records",
      active: currentPage === "records",
      onClick: () => handleNavigation("records"),
    },
    {
      icon: Heart,
      label: "Health Status",
      active: currentPage === "health",
      onClick: () => handleNavigation("health"),
    },
  ]

  const otherMenuItems: MenuItem[] = [
    {
      icon: Bell,
      label: "Notifications",
      active: false,
      onClick: () => {
        onShowNotifications?.()
        setIsMobileMenuOpen(false)
      },
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      active: currentPage === "help",
      onClick: () => handleNavigation("help"),
    },
    {
      icon: Settings,
      label: "Settings",
      active: currentPage === "settings",
      onClick: () => handleNavigation("settings"),
    },
    {
      icon: LogOut,
      label: "Logout",
      active: false,
      onClick: () => {
        console.log("[v0] Logout clicked")
        // Handle logout logic here
        setIsMobileMenuOpen(false)
      },
    },
  ]

  const handleNavigation = (page: string) => {
    console.log("[v0] Navigating to:", page)
    onNavigate?.(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-teal-700 text-white rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div
        className={cn(
          "bg-teal-700 text-white h-screen flex flex-col transition-transform duration-300 ease-in-out z-40",
          "lg:w-52 lg:relative lg:translate-x-0",
          "fixed w-64 top-0 left-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-teal-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
            </div>
            <span className="font-bold text-sm">Smobus Clinic</span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="text-xs text-teal-200 mb-2 font-medium">STUDENT MENU</div>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors text-left",
                  item.active ? "bg-teal-600 text-white" : "text-teal-100 hover:bg-teal-600 hover:text-white",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="text-xs text-teal-200 mb-2 mt-6 font-medium">ACCOUNT</div>
          <nav className="space-y-1">
            {otherMenuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors text-left",
                  item.active ? "bg-teal-600 text-white" : "text-teal-100 hover:bg-teal-600 hover:text-white",
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

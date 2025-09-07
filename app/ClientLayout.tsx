"use client"

import type React from "react"
import { DashboardNav } from "@/components/dashboard/nav"
import { useState } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const handleNavigation = (page: string) => {
    console.log("[v0] App-level navigation to:", page)
    setCurrentPage(page)
    // Here you would implement actual routing logic
    // For now, we're just managing state
  }

  const handleBookAppointment = () => {
    console.log("[v0] Book appointment from sidebar")
    // Trigger booking modal - this would be coordinated with header component
  }

  const handleShowProfile = () => {
    console.log("[v0] Show profile from sidebar")
    // Trigger profile modal - this would be coordinated with header component
  }

  const handleShowNotifications = () => {
    console.log("[v0] Show notifications from sidebar")
    // Trigger notifications modal - this would be coordinated with header component
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardNav
        onNavigate={handleNavigation}
        onBookAppointment={handleBookAppointment}
        onShowProfile={handleShowProfile}
        onShowNotifications={handleShowNotifications}
        currentPage={currentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-52">{children}</div>
    </div>
  )
}

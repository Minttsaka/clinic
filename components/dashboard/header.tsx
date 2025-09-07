"use client"

import { Search, Plus, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Modal } from "@/components/shared/modal"
import { BookAppointmentModal } from "@/components/dashboard/modals/book-appointment"
import { ProfileModal } from "@/components/dashboard/modals/profile"
import { NotificationsModal } from "@/components/dashboard/modals/notifications"

export function DashboardHeader() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [notificationsModalOpen, setNotificationsModalOpen] = useState(false)

  const handleBookAppointment = (appointmentData: any) => {
    console.log("[v0] Booking appointment:", appointmentData)
    // Here you would typically send the data to your backend
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-2 sm:px-4 md:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xs sm:max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              <Input placeholder="Search..." className="pl-7 sm:pl-10 text-xs h-7 sm:h-8 bg-gray-50 border-gray-200" />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Button
              size="sm"
              className="bg-teal-700 hover:bg-teal-800 text-xs h-7 sm:h-8 px-2 sm:px-3"
              onClick={() => setBookingModalOpen(true)}
            >
              <Plus className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline ml-1">Book</span>
            </Button>

            <button
              className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setNotificationsModalOpen(true)}
            >
              <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
            </button>

            <button
              className="flex items-center gap-1 sm:gap-2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setProfileModalOpen(true)}
            >
              <Avatar className="w-6 h-6 sm:w-7 sm:h-7">
                <AvatarImage src="/diverse-student-profiles.png" />
                <AvatarFallback className="text-xs">S</AvatarFallback>
              </Avatar>
              <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600 hidden sm:block" />
            </button>
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">Hello, Student 👋</h1>
            <p className="text-xs text-gray-600 line-clamp-2 sm:line-clamp-1">
              Welcome to Smobus Clinic Portal. Check your appointments and health updates
            </p>
          </div>
          <div className="text-xs text-gray-600 bg-gray-50 px-2 sm:px-3 py-1 rounded border whitespace-nowrap flex-shrink-0">
            📅 Monday, 4th September
          </div>
        </div>
      </header>

      <Modal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        title="Book New Appointment"
        size="lg"
      >
        <BookAppointmentModal onClose={() => setBookingModalOpen(false)} onBook={handleBookAppointment} />
      </Modal>

      <Modal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} title="Student Profile" size="lg">
        <ProfileModal onClose={() => setProfileModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={notificationsModalOpen}
        onClose={() => setNotificationsModalOpen(false)}
        title="Notifications"
        size="md"
      >
        <NotificationsModal onClose={() => setNotificationsModalOpen(false)} />
      </Modal>
    </>
  )
}

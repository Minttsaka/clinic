"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ChevronLeft, ChevronRight, Calendar, Clock, User, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/shared/modal"
import { AppointmentDetailsModal } from "@/components/dashboard/modals/appointment-details"
import { BookAppointmentModal } from "@/components/dashboard/modals/book-appointment"
import { appointments, type Appointment } from "@/lib/demo-data"

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("day")

  const today = new Date()
  const todayStr = today.toISOString().split("T")[0]

  const todayAppointments = appointments.filter((apt) => apt.date === todayStr)

  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === "scheduled" && new Date(apt.date) >= new Date(),
  )

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setDetailsModalOpen(true)
  }

  const handleBookAppointment = (appointmentData: any) => {
    console.log("[v0] Booking appointment from calendar:", appointmentData)
    // Here you would typically send the data to your backend
  }

  if (viewMode === "month") {
    const days = getDaysInMonth(currentDate)
    const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

    return (
      <>
        <Card className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">{monthName}</h3>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => setViewMode("day")}>
                <Calendar className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => setBookingModalOpen(true)}>
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-3">
            <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => navigateMonth("prev")}>
              <ChevronLeft className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => navigateMonth("next")}>
              <ChevronRight className="w-3 h-3" />
            </Button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 font-medium p-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              const isToday =
                day === today.getDate() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getFullYear() === today.getFullYear()

              return (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center text-xs cursor-pointer rounded hover:bg-gray-100 ${
                    day === null ? "" : isToday ? "bg-teal-700 text-white" : "text-gray-700"
                  }`}
                  onClick={() => day && setViewMode("day")}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </Card>

        <Modal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          title="Book New Appointment"
          size="lg"
        >
          <BookAppointmentModal onClose={() => setBookingModalOpen(false)} onBook={handleBookAppointment} />
        </Modal>
      </>
    )
  }

  return (
    <>
      <Card className="p-4">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Today {formatDate(today).split(",")[1]}</h3>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => setViewMode("month")}>
              <Calendar className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="ghost" className="w-6 h-6 p-0" onClick={() => setBookingModalOpen(true)}>
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Quick Week View */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
            const date = new Date(today)
            date.setDate(today.getDate() - today.getDay() + index + 1)
            const isToday = date.toDateString() === today.toDateString()

            return (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-1">{day}</div>
                <div
                  className={`w-6 h-6 text-xs flex items-center justify-center rounded cursor-pointer hover:bg-gray-100 ${
                    isToday ? "bg-teal-700 text-white" : "text-gray-700"
                  }`}
                >
                  {date.getDate()}
                </div>
              </div>
            )
          })}
        </div>

        {/* Today's Schedule */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-medium text-gray-700">Today's Schedule</h4>
            <span className="text-xs text-gray-500">{todayAppointments.length} appointments</span>
          </div>

          {todayAppointments.length === 0 ? (
            <div className="text-center py-6">
              <Calendar className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-500">No appointments today</p>
              <Button size="sm" variant="ghost" className="text-xs mt-2" onClick={() => setBookingModalOpen(true)}>
                Book an appointment
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {todayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                    appointment.status === "scheduled"
                      ? "bg-teal-700 text-white"
                      : appointment.status === "completed"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                  }`}
                  onClick={() => handleAppointmentClick(appointment)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs font-medium">{appointment.reason}</span>
                      </div>
                      <div
                        className={`text-xs ${appointment.status === "scheduled" ? "text-teal-100" : "text-gray-600"}`}
                      >
                        {appointment.time} - {appointment.type}
                      </div>
                      <div
                        className={`text-xs flex items-center gap-1 ${
                          appointment.status === "scheduled" ? "text-teal-100" : "text-gray-600"
                        }`}
                      >
                        <User className="w-3 h-3" />
                        {appointment.clinicianName}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className={`w-5 h-5 p-0 ${
                        appointment.status === "scheduled"
                          ? "text-teal-100 hover:bg-teal-600"
                          : "text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 space-y-1">
            <h5 className="text-xs font-medium text-gray-700 mb-2">Available Time Slots</h5>
            {["09:00", "11:00", "14:30", "16:00"].map((time) => (
              <div
                key={time}
                className="flex items-center justify-between p-2 rounded border border-dashed border-gray-200 hover:border-teal-300 hover:bg-teal-50 cursor-pointer transition-colors"
                onClick={() => setBookingModalOpen(true)}
              >
                <span className="text-xs text-gray-600">{time}</span>
                <Plus className="w-3 h-3 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Modals */}
      <Modal isOpen={detailsModalOpen} onClose={() => setDetailsModalOpen(false)} title="Appointment Details" size="md">
        {selectedAppointment && (
          <AppointmentDetailsModal appointment={selectedAppointment} onClose={() => setDetailsModalOpen(false)} />
        )}
      </Modal>

      <Modal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        title="Book New Appointment"
        size="lg"
      >
        <BookAppointmentModal onClose={() => setBookingModalOpen(false)} onBook={handleBookAppointment} />
      </Modal>
    </>
  )
}

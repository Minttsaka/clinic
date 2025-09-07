"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookAppointmentModalProps {
  onClose: () => void
  onBook: (appointment: any) => void
}

export function BookAppointmentModal({ onClose, onBook }: BookAppointmentModalProps) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    clinician: "",
    reason: "",
    type: "consultation",
  })

  const clinicians = [
    "Dr. Sarah Johnson - General Medicine",
    "Dr. Michael Chen - Cardiology",
    "Dr. Emily Davis - Dermatology",
    "Dr. James Wilson - Orthopedics",
  ]

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onBook(formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Calendar className="w-4 h-4" />
          Preferred Date
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          min={new Date().toISOString().split("T")[0]}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Clock className="w-4 h-4" />
          Preferred Time
        </label>
        <select
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        >
          <option value="">Select time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <User className="w-4 h-4" />
          Clinician
        </label>
        <select
          value={formData.clinician}
          onChange={(e) => setFormData({ ...formData, clinician: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        >
          <option value="">Select clinician</option>
          {clinicians.map((clinician) => (
            <option key={clinician} value={clinician}>
              {clinician}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FileText className="w-4 h-4" />
          Reason for Visit
        </label>
        <textarea
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          placeholder="Please describe your symptoms or reason for the appointment..."
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          required
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
          Cancel
        </Button>
        <Button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-700">
          Book Appointment
        </Button>
      </div>
    </form>
  )
}

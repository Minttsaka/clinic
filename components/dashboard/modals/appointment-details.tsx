"use client"

import { Calendar, Clock, User, FileText, MapPin, Phone, Edit, Trash2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Appointment {
  id: string
  title: string
  time: string
  duration: string
  doctor: string
  type: "upcoming" | "completed" | "cancelled"
  date: string
  notes?: string
}

interface AppointmentDetailsModalProps {
  appointment: Appointment
  onClose: () => void
}

export function AppointmentDetailsModal({ appointment, onClose }: AppointmentDetailsModalProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (type: string) => {
    switch (type) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{appointment.title}</h3>
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(appointment.type)}`}
          >
            {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
          </span>
        </div>
        {appointment.type === "upcoming" && (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-2 bg-transparent">
              <Edit className="w-4 h-4" />
              Edit
            </Button>
            <Button size="sm" variant="outline" className="gap-2 text-red-600 hover:text-red-700 bg-transparent">
              <Trash2 className="w-4 h-4" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Appointment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Date</p>
              <p className="text-sm text-gray-600">{formatDate(appointment.date)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Time</p>
              <p className="text-sm text-gray-600">
                {appointment.time} ({appointment.duration})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Healthcare Provider</p>
              <p className="text-sm text-gray-600">{appointment.doctor}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-teal-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Location</p>
              <p className="text-sm text-gray-600">Smobus Health Center</p>
              <p className="text-sm text-gray-600">Room 205, Building A</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-teal-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Contact</p>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          {appointment.type === "completed" && (
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-900">Status</p>
                <p className="text-sm text-green-700">Appointment completed successfully</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {appointment.notes && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <h4 className="font-medium text-gray-900">Notes</h4>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">{appointment.notes}</p>
          </div>
        </div>
      )}

      {/* Preparation Instructions */}
      {appointment.type === "upcoming" && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Preparation Instructions</h4>
          <div className="p-3 bg-blue-50 rounded-lg">
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Arrive 15 minutes early for check-in</li>
              <li>• Bring your student ID and insurance card</li>
              <li>• Bring a list of current medications</li>
              <li>• Wear comfortable clothing</li>
            </ul>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
          Close
        </Button>
        {appointment.type === "upcoming" && (
          <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Reschedule Appointment</Button>
        )}
        {appointment.type === "completed" && (
          <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Book Follow-up</Button>
        )}
      </div>
    </div>
  )
}

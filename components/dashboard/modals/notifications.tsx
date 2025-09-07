"use client"

import { Bell, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationsModalProps {
  onClose: () => void
}

export function NotificationsModal({ onClose }: NotificationsModalProps) {
  const notifications = [
    {
      id: 1,
      type: "appointment",
      title: "Upcoming Appointment Reminder",
      message: "You have an appointment with Dr. Sarah Johnson tomorrow at 10:00 AM",
      time: "2 hours ago",
      read: false,
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      type: "alert",
      title: "Health Alert",
      message: "Please update your emergency contact information in your profile",
      time: "1 day ago",
      read: false,
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 3,
      type: "success",
      title: "Appointment Confirmed",
      message: "Your appointment for September 6th has been confirmed",
      time: "2 days ago",
      read: true,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      type: "reminder",
      title: "Prescription Reminder",
      message: "Time to refill your prescription. Contact the clinic pharmacy",
      time: "3 days ago",
      read: true,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="font-semibold">Notifications</span>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{unreadCount}</span>
          )}
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          Mark all as read
        </Button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.map((notification) => {
          const IconComponent = notification.icon
          return (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition-colors hover:bg-gray-50 ${
                !notification.read ? "bg-blue-50/50 border-blue-200" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex gap-3">
                <div className={`p-2 rounded-full ${notification.bgColor}`}>
                  <IconComponent className={`w-4 h-4 ${notification.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`text-sm font-medium ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                      {notification.title}
                    </h4>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  {!notification.read && (
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                        Mark as read
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
          Close
        </Button>
        <Button className="flex-1 bg-teal-600 hover:bg-teal-700">View All Notifications</Button>
      </div>
    </div>
  )
}

import { Card } from "@/components/ui/card"
import { Calendar, Clock, FileText, Heart } from "lucide-react"
import { appointments, medicalRecords, healthAlerts } from "@/lib/demo-data"

export function StatsCards() {
  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === "scheduled" && new Date(apt.date) >= new Date(),
  )
  const completedVisits = appointments.filter((apt) => apt.status === "completed")
  const unreadAlerts = healthAlerts.filter((alert) => !alert.isRead)
  const nextAppointment = upcomingAppointments.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )[0]

  const stats = [
    {
      title: "Upcoming Appointments",
      value: upcomingAppointments.length.toString(),
      change: nextAppointment
        ? `Next: ${new Date(nextAppointment.date).toLocaleDateString()} ${nextAppointment.time}`
        : "No upcoming appointments",
      icon: Calendar,
      color: "bg-teal-700",
      textColor: "text-white",
    },
    {
      title: "Completed Visits",
      value: completedVisits.length.toString(),
      change:
        completedVisits.length > 0
          ? `Last visit: ${new Date(completedVisits[completedVisits.length - 1].date).toLocaleDateString()}`
          : "No visits yet",
      icon: Clock,
      color: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Medical Records",
      value: medicalRecords.length.toString(),
      change:
        medicalRecords.length > 0 ? `Updated ${new Date(medicalRecords[0].date).toLocaleDateString()}` : "No records",
      icon: FileText,
      color: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Health Alerts",
      value: unreadAlerts.length.toString(),
      change: unreadAlerts.length > 0 ? unreadAlerts[0].message : "No alerts",
      icon: Heart,
      color: "bg-white",
      textColor: "text-gray-900",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`p-3 md:p-4 ${stat.color} ${stat.textColor} border-0 hover:shadow-lg transition-shadow cursor-pointer`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`p-2 rounded-full ${index === 0 ? "bg-teal-600" : "bg-gray-100"}`}>
              <stat.icon className={`w-4 h-4 ${index === 0 ? "text-white" : "text-teal-700"}`} />
            </div>
          </div>
          <div className="space-y-1">
            <p className={`text-xs ${index === 0 ? "text-teal-100" : "text-gray-600"}`}>{stat.title}</p>
            <p className="text-lg md:text-xl font-bold">{stat.value}</p>
            <p className={`text-xs ${index === 0 ? "text-teal-200" : "text-gray-500"} truncate`}>{stat.change}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

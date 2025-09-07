import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MoreHorizontal } from "lucide-react"
import { billingInfo, clinicAvailability, healthAlerts } from "@/lib/demo-data"

export function BottomCards() {
  const unreadAlerts = healthAlerts.filter((alert) => !alert.isRead)
  const readAlerts = healthAlerts.filter((alert) => alert.isRead)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
      <Card className="p-3 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Payment Status</h3>
          <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
            <span className="hidden sm:inline">View</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <span className="text-orange-700 font-bold text-sm">!</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-lg font-bold">${billingInfo.pendingAmount}</div>
              <div className="text-xs text-gray-500">Outstanding balance</div>
            </div>
          </div>

          <div>
            <div className="text-lg font-bold">${billingInfo.totalPaid}</div>
            <div className="text-xs text-gray-500">Total paid this year</div>
            <div className="text-sm font-bold text-green-600">{billingInfo.insuranceCoverage}% Insurance Coverage</div>
            <div className="text-xs text-gray-500">
              Last payment: {new Date(billingInfo.lastPayment).toLocaleDateString()}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-3 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Clinic Availability</h3>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <MoreHorizontal className="w-3 h-3" />
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl font-bold">{clinicAvailability.availableSlots}</div>
            <div className="text-xs text-green-600">slots available today</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs truncate">General consultation</span>
              </div>
              <span className="text-xs font-medium flex-shrink-0 ml-2">45 slots</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs truncate">Specialist consultation</span>
              </div>
              <span className="text-xs font-medium flex-shrink-0 ml-2">27 slots</span>
            </div>

            <div className="text-xs text-gray-500 mt-2">Next available: {clinicAvailability.nextAvailable}</div>
            <div className="text-xs text-gray-500">
              Occupancy: {clinicAvailability.currentOccupancy}/{clinicAvailability.totalCapacity} (
              {Math.round((clinicAvailability.currentOccupancy / clinicAvailability.totalCapacity) * 100)}%)
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-3 md:p-4 md:col-span-2 xl:col-span-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Health Notifications</h3>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <MoreHorizontal className="w-3 h-3" />
          </Button>
        </div>

        <div className="space-y-3">
          {unreadAlerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-2">
              <div
                className={`w-6 h-6 rounded flex items-center justify-center mt-0.5 flex-shrink-0 ${
                  alert.priority === "high"
                    ? "bg-red-100"
                    : alert.priority === "medium"
                      ? "bg-yellow-100"
                      : "bg-blue-100"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    alert.priority === "high"
                      ? "bg-red-600"
                      : alert.priority === "medium"
                        ? "bg-yellow-600"
                        : "bg-blue-600"
                  }`}
                ></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium">{alert.message}</div>
                <div className="text-xs text-gray-500">
                  {alert.dueDate ? `Due: ${new Date(alert.dueDate).toLocaleDateString()}` : "No due date"}
                </div>
                <Button variant="link" className="text-xs h-auto p-0 text-blue-600">
                  {alert.type === "vaccination" ? "Schedule now" : "View details"} →
                </Button>
              </div>
            </div>
          ))}

          {readAlerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-2 opacity-60">
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium">{alert.message}</div>
                <div className="text-xs text-gray-500">Read</div>
              </div>
            </div>
          ))}

          {healthAlerts.length === 0 && (
            <div className="text-center py-4">
              <div className="text-xs text-gray-500">No notifications</div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Calendar, User, Phone, Mail, MapPin } from "lucide-react"
import { medicalRecords, currentStudent } from "@/lib/demo-data"

export function AdditionalFeatures() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
      {/* Recent Medical Records */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Recent Medical Records</h3>
          <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {medicalRecords.slice(0, 3).map((record) => (
            <div
              key={record.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{record.type}</div>
                <div className="text-xs text-gray-600 mb-1">{record.diagnosis}</div>
                <div className="text-xs text-gray-500">
                  {new Date(record.date).toLocaleDateString()} • {record.clinicianName}
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" className="w-6 h-6 p-0">
                  <Eye className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="ghost" className="w-6 h-6 p-0">
                  <Download className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Student Profile Summary */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">My Profile</h3>
          <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
            Edit
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <div className="font-medium text-sm">{currentStudent.name}</div>
              <div className="text-xs text-gray-500">{currentStudent.studentId}</div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-gray-400" />
              <span>{currentStudent.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-gray-400" />
              <span>{currentStudent.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-gray-400" />
              <span>
                {currentStudent.program} • Year {currentStudent.year}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t">
            <div className="text-xs font-medium mb-2">Medical Information</div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                {currentStudent.medicalInfo.bloodType}
              </Badge>
              {currentStudent.medicalInfo.allergies.map((allergy) => (
                <Badge key={allergy} variant="destructive" className="text-xs">
                  {allergy}
                </Badge>
              ))}
              {currentStudent.medicalInfo.conditions.map((condition) => (
                <Badge key={condition} variant="secondary" className="text-xs">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-4 lg:col-span-2">
        <h3 className="font-semibold text-sm mb-4">Quick Actions</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">Book Appointment</span>
          </Button>

          <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col gap-2 bg-transparent">
            <FileText className="w-4 h-4" />
            <span className="text-xs">View Records</span>
          </Button>

          <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            <span className="text-xs">Download Forms</span>
          </Button>

          <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col gap-2 bg-transparent">
            <Phone className="w-4 h-4" />
            <span className="text-xs">Contact Clinic</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}

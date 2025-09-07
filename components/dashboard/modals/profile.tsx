"use client"

import { User, Mail, Phone, MapPin, Calendar, FileText, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileModalProps {
  onClose: () => void
}

export function ProfileModal({ onClose }: ProfileModalProps) {
  const studentData = {
    name: "Alex Johnson",
    studentId: "SMB2024001",
    email: "alex.johnson@smobus.edu",
    phone: "+1 (555) 123-4567",
    address: "123 Campus Drive, University City, UC 12345",
    dateOfBirth: "March 15, 2002",
    emergencyContact: "Sarah Johnson - +1 (555) 987-6543",
    bloodType: "O+",
    allergies: "Penicillin, Shellfish",
    medicalHistory: "No significant medical history",
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/diverse-student-profiles.png" />
          <AvatarFallback className="text-lg">AJ</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{studentData.name}</h3>
          <p className="text-sm text-gray-600">Student ID: {studentData.studentId}</p>
          <p className="text-xs text-teal-600">Smobus Institution</p>
        </div>
        <Button size="sm" variant="outline" className="gap-2 bg-transparent">
          <Edit className="w-4 h-4" />
          Edit Profile
        </Button>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          <User className="w-4 h-4" />
          Contact Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Email:</span>
              <span className="font-medium">{studentData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Phone:</span>
              <span className="font-medium">{studentData.phone}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">Date of Birth:</span>
              <span className="font-medium">{studentData.dateOfBirth}</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <span className="text-gray-600">Address:</span>
                <p className="font-medium">{studentData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Medical Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Blood Type</p>
              <p className="font-semibold text-red-600">{studentData.bloodType}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Known Allergies</p>
              <p className="font-medium text-orange-600">{studentData.allergies}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Emergency Contact</p>
              <p className="font-medium">{studentData.emergencyContact}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Medical History</p>
              <p className="font-medium">{studentData.medicalHistory}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
          Close
        </Button>
        <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Update Medical Info</Button>
      </div>
    </div>
  )
}

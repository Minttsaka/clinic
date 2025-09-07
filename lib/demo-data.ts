export interface Student {
  id: string
  name: string
  email: string
  studentId: string
  program: string
  year: number
  phone: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  medicalInfo: {
    bloodType: string
    allergies: string[]
    medications: string[]
    conditions: string[]
  }
}

export interface Appointment {
  id: string
  studentId: string
  clinicianId: string
  clinicianName: string
  date: string
  time: string
  type: "consultation" | "checkup" | "vaccination" | "emergency" | "follow-up"
  status: "scheduled" | "completed" | "cancelled" | "no-show"
  reason: string
  notes?: string
  preparation?: string[]
}

export interface MedicalRecord {
  id: string
  studentId: string
  date: string
  type: string
  diagnosis: string
  treatment: string
  clinicianName: string
  followUp?: string
}

export interface HealthAlert {
  id: string
  studentId: string
  type: "vaccination" | "checkup" | "medication" | "emergency"
  message: string
  priority: "low" | "medium" | "high"
  dueDate?: string
  isRead: boolean
}

// Current student data
export const currentStudent: Student = {
  id: "STU001",
  name: "Sourav Kumar",
  email: "sourav.kumar@smobus.edu",
  studentId: "SMB2024001",
  program: "Computer Science",
  year: 3,
  phone: "+1 (555) 123-4567",
  emergencyContact: {
    name: "Priya Kumar",
    phone: "+1 (555) 987-6543",
    relationship: "Mother",
  },
  medicalInfo: {
    bloodType: "O+",
    allergies: ["Peanuts", "Shellfish"],
    medications: ["Vitamin D3"],
    conditions: ["Mild Asthma"],
  },
}

// Demo appointments data
export const appointments: Appointment[] = [
  {
    id: "APT001",
    studentId: "STU001",
    clinicianId: "DOC001",
    clinicianName: "Dr. Sarah Johnson",
    date: "2024-01-09",
    time: "14:00",
    type: "consultation",
    status: "scheduled",
    reason: "Annual health checkup",
    preparation: ["Bring previous medical records", "Fast for 8 hours before appointment"],
  },
  {
    id: "APT002",
    studentId: "STU001",
    clinicianId: "DOC002",
    clinicianName: "Dr. Michael Chen",
    date: "2024-01-12",
    time: "10:30",
    type: "vaccination",
    status: "scheduled",
    reason: "Flu vaccination",
    preparation: ["Bring vaccination card"],
  },
  {
    id: "APT003",
    studentId: "STU001",
    clinicianId: "DOC001",
    clinicianName: "Dr. Sarah Johnson",
    date: "2024-01-15",
    time: "16:00",
    type: "follow-up",
    status: "scheduled",
    reason: "Follow-up for asthma management",
  },
  {
    id: "APT004",
    studentId: "STU001",
    clinicianId: "DOC003",
    clinicianName: "Dr. Emily Rodriguez",
    date: "2023-12-20",
    time: "11:00",
    type: "consultation",
    status: "completed",
    reason: "Stress and anxiety consultation",
    notes: "Recommended stress management techniques and follow-up in 3 months",
  },
  {
    id: "APT005",
    studentId: "STU001",
    clinicianId: "DOC002",
    clinicianName: "Dr. Michael Chen",
    date: "2023-12-05",
    time: "09:30",
    type: "checkup",
    status: "completed",
    reason: "Routine physical examination",
  },
]

// Demo medical records
export const medicalRecords: MedicalRecord[] = [
  {
    id: "MED001",
    studentId: "STU001",
    date: "2023-12-20",
    type: "Mental Health Consultation",
    diagnosis: "Mild anxiety related to academic stress",
    treatment: "Counseling sessions, stress management techniques",
    clinicianName: "Dr. Emily Rodriguez",
    followUp: "3 months",
  },
  {
    id: "MED002",
    studentId: "STU001",
    date: "2023-12-05",
    type: "Physical Examination",
    diagnosis: "Overall good health, mild asthma well-controlled",
    treatment: "Continue current inhaler, regular exercise",
    clinicianName: "Dr. Michael Chen",
  },
  {
    id: "MED003",
    studentId: "STU001",
    date: "2023-10-15",
    type: "Vaccination",
    diagnosis: "Immunization update",
    treatment: "COVID-19 booster administered",
    clinicianName: "Nurse Patricia Williams",
  },
  {
    id: "MED004",
    studentId: "STU001",
    date: "2023-09-10",
    type: "Allergy Testing",
    diagnosis: "Confirmed peanut and shellfish allergies",
    treatment: "EpiPen prescribed, dietary restrictions advised",
    clinicianName: "Dr. Amanda Foster",
  },
  {
    id: "MED005",
    studentId: "STU001",
    date: "2023-08-22",
    type: "Sports Physical",
    diagnosis: "Cleared for all athletic activities",
    treatment: "Continue current fitness routine",
    clinicianName: "Dr. Robert Kim",
  },
]

// Demo health alerts
export const healthAlerts: HealthAlert[] = [
  {
    id: "ALERT001",
    studentId: "STU001",
    type: "vaccination",
    message: "Annual flu vaccination is due",
    priority: "medium",
    dueDate: "2024-01-15",
    isRead: false,
  },
  {
    id: "ALERT002",
    studentId: "STU001",
    type: "checkup",
    message: "Annual physical examination recommended",
    priority: "low",
    dueDate: "2024-02-01",
    isRead: true,
  },
  {
    id: "ALERT003",
    studentId: "STU001",
    type: "medication",
    message: "Inhaler prescription expires soon",
    priority: "high",
    dueDate: "2024-01-20",
    isRead: false,
  },
]

// Chart data for health visits
export const healthVisitsData = [
  { month: "Jan", scheduled: 2, completed: 1 },
  { month: "Feb", scheduled: 3, completed: 2 },
  { month: "Mar", scheduled: 1, completed: 1 },
  { month: "Apr", scheduled: 2, completed: 2 },
  { month: "May", scheduled: 4, completed: 3 },
  { month: "Jun", scheduled: 2, completed: 2 },
  { month: "Jul", scheduled: 1, completed: 1 },
  { month: "Aug", scheduled: 3, completed: 2 },
  { month: "Sep", scheduled: 2, completed: 2 },
  { month: "Oct", scheduled: 3, completed: 3 },
  { month: "Nov", scheduled: 2, completed: 1 },
  { month: "Dec", scheduled: 3, completed: 2 },
]

// Clinic availability data
export const clinicAvailability = {
  totalCapacity: 150,
  currentOccupancy: 78,
  availableSlots: 72,
  nextAvailable: "Today 3:30 PM",
}

// Payment/billing data
export const billingInfo = {
  totalBilled: 1250.0,
  totalPaid: 1100.0,
  pendingAmount: 150.0,
  insuranceCoverage: 85,
  lastPayment: "2023-12-15",
}

export const emergencyContacts = [
  {
    name: "Campus Health Emergency",
    phone: "+1 (555) 911-HELP",
    type: "emergency",
  },
  {
    name: "Smobus Clinic Reception",
    phone: "+1 (555) 123-CARE",
    type: "general",
  },
  {
    name: "Mental Health Crisis Line",
    phone: "+1 (555) 988-MIND",
    type: "mental-health",
  },
]

export const clinicHours = {
  monday: "8:00 AM - 6:00 PM",
  tuesday: "8:00 AM - 6:00 PM",
  wednesday: "8:00 AM - 6:00 PM",
  thursday: "8:00 AM - 6:00 PM",
  friday: "8:00 AM - 5:00 PM",
  saturday: "9:00 AM - 2:00 PM",
  sunday: "Closed",
}

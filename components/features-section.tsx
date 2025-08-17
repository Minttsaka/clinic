import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Activity, Shield } from "lucide-react"
import { WaveTop, WaveBottom } from "./wave-backgrounds"

export default function FeaturesSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <WaveTop />
      <WaveBottom />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=180&width=280&text=Modern+Clinic+Equipment"
                  alt="Modern clinic equipment"
                  width={280}
                  height={180}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=180&width=280&text=Doctor+Using+Tablet"
                  alt="Doctor using management system"
                  width={280}
                  height={180}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Complete Clinic Management And Patient Care Solution
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Mubas Clinic Management System provides comprehensive tools for patient management, appointment
                scheduling, medical records, and operational efficiency.
              </p>
              <p className="text-sm text-gray-600 border-l-4 border-cyan-400 pl-3">
                Our integrated platform streamlines clinic operations while ensuring the highest standards of patient
                care and data security for healthcare providers.
              </p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Patient Management</h3>
                      <p className="text-gray-600 text-xs">
                        Comprehensive patient records, appointment scheduling, and medical history tracking for
                        efficient healthcare delivery.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Clinical Analytics</h3>
                      <p className="text-gray-600 text-xs">
                        Advanced reporting and analytics tools to monitor clinic performance, patient outcomes, and
                        operational metrics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Secure Environment</h3>
                      <p className="text-gray-600 text-xs">
                        HIPAA-compliant security measures ensuring patient data protection and regulatory compliance for
                        healthcare facilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

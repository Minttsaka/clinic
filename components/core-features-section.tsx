import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText, CreditCard, BarChart3, Stethoscope, Clock, CheckCircle } from "lucide-react"
import { WaveComplex } from "./wave-backgrounds"

export default function CoreFeaturesSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-cyan-50/20">
      <WaveComplex />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Powerful Features For Modern Clinics</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your clinic efficiently, from patient registration to billing and reporting, all
            in one integrated platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Appointment Scheduling</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Smart scheduling system with automated reminders, conflict detection, and online booking capabilities.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Online booking portal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  SMS & email reminders
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Resource management
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Electronic Health Records</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Comprehensive digital patient records with medical history, prescriptions, and treatment plans.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Digital prescriptions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Medical imaging
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Lab results integration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Billing & Payments</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Automated billing system with insurance claims processing and multiple payment options.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Insurance integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Payment processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Financial reporting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Comprehensive analytics dashboard with customizable reports and performance metrics.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Revenue tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Patient analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Custom reports
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Workflow</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Streamlined clinical processes with customizable workflows and task management for staff.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Task automation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Staff coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Quality assurance
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Round-the-clock technical support with dedicated account managers and comprehensive training resources.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Live chat support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  Training programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                  System maintenance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

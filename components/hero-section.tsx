import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, UserCheck, Phone, Calendar, Play } from "lucide-react"
import { WaveBottom } from "./wave-backgrounds"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-cyan-50/30 to-blue-50/20 overflow-hidden">
      <WaveBottom />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Streamline Your Clinic Operations With
                <span className="block text-cyan-600">Advanced Management</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-600 max-w-lg">
                Comprehensive clinic management solution designed to optimize patient care, streamline workflows, and
                enhance operational efficiency for modern healthcare facilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black text-white px-6 py-2.5 text-sm rounded-lg hover:bg-gray-800">
                Get Started
              </Button>
              <Button variant="ghost" className="flex items-center space-x-2 text-cyan-500 text-sm">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-white ml-0.5" />
                </div>
                <span>See How It Works</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-600">Efficiency Rate</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Active Clinics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with doctor image */}
          <div className="relative">
            <div className="relative">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full transform scale-110 opacity-60"></div>

              {/* Doctor image */}
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Professional+Doctor"
                  alt="Professional doctor"
                  width={400}
                  height={500}
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>

              {/* Emergency contact card */}
              <div className="absolute top-6 left-4 lg:left-6 bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-900">24/7 Support</div>
                  <div className="text-xs text-cyan-500">+1 234 567 8900</div>
                </div>
              </div>

              {/* Patient stats */}
              <div className="absolute bottom-12 left-4 lg:left-6 bg-white rounded-lg shadow-lg p-3">
                <div className="text-sm font-bold text-gray-900 mb-2">2.5K+ Patients Managed</div>
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="w-6 h-6 border-2 border-white">
                      <AvatarImage src={`/placeholder-icon.png?height=24&width=24&text=${i}`} />
                      <AvatarFallback className="text-xs">P{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>

              {/* Doctor availability card */}
              <div className="absolute bottom-6 right-4 lg:right-6 bg-white rounded-lg shadow-lg p-3 text-center">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-1">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs font-bold text-gray-900">24/7 System Access</div>
                <div className="text-xs text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

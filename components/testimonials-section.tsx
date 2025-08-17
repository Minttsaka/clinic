import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { WaveMiddle } from "./wave-backgrounds"

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <WaveMiddle />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Trusted By Healthcare Professionals</h2>
          <p className="text-sm text-gray-600">
            See what clinic administrators and healthcare providers say about Mubas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                "Mubas has transformed our clinic operations. Patient scheduling is seamless, and our staff productivity
                has increased by 40%. The reporting features are exceptional."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=Dr.+Sarah" />
                  <AvatarFallback>DS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Dr. Sarah Johnson</div>
                  <div className="text-xs text-gray-600">Medical Director, City Health Clinic</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                "The electronic health records system is intuitive and comprehensive. We've reduced paperwork by 80% and
                improved patient care coordination significantly."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=M.+Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Michael Chen</div>
                  <div className="text-xs text-gray-600">Practice Manager, Family Care Center</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                "Outstanding customer support and training. The billing integration has streamlined our revenue cycle,
                and the analytics help us make data-driven decisions."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=Dr.+Lisa" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Dr. Lisa Williams</div>
                  <div className="text-xs text-gray-600">Chief Medical Officer, Regional Health</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

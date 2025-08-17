import { Button } from "@/components/ui/button"
import { WaveTop } from "./wave-backgrounds"

export default function CTASection() {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
      <WaveTop />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Ready To Transform Your Clinic?</h2>
        <p className="text-base text-cyan-100 mb-6 max-w-2xl mx-auto">
          Join thousands of healthcare providers who trust Mubas to streamline their operations and improve patient
          care. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-white text-cyan-500 px-6 py-2.5 text-sm rounded-lg hover:bg-gray-100 font-semibold">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-white text-white px-6 py-2.5 text-sm rounded-lg hover:bg-white hover:text-cyan-500 font-semibold bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-cyan-100 text-xs mt-3">No credit card required • 30-day free trial • Setup in minutes</p>
      </div>
    </section>
  )
}

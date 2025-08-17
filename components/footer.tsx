import { Activity } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Mubas Clinic</span>
            </div>
            <p className="text-gray-400 mb-3 text-sm">
              Empowering healthcare providers with innovative clinic management solutions.
            </p>
            <div className="flex space-x-3">
              <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs">t</span>
              </div>
              <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white text-xs">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white text-xs">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p className="text-xs">&copy; 2024 Mubas Clinic Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Activity,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  Zap,
  Users,
  BarChart3,
  UserPlus,
  Sparkles,
  Calendar,
  Phone,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Image from "next/image";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    subscribeNewsletter: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === "password") {
      calculatePasswordStrength(value as string)
    }
  }

  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    setPasswordStrength(strength)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-400"
    if (passwordStrength <= 3) return "bg-yellow-400"
    if (passwordStrength <= 4) return "bg-blue-400"
    return "bg-green-400"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak"
    if (passwordStrength <= 3) return "Fair"
    if (passwordStrength <= 4) return "Good"
    return "Strong"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate signup
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-cyan-50/30 to-blue-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/5 to-cyan-600/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/20 rotate-45 rounded-sm"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-2 h-8 bg-emerald-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-400/20 rotate-12 rounded-sm"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 py-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Branding & Benefits */}
          <div className="hidden lg:block space-y-8 sticky top-8">
            {/* Logo & Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image src={"/mubas-logo.png"} height={50} width={50} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Mubas Clinic
                  </h1>
                  <p className="text-xs text-gray-600 -mt-1">Advanced Management System</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
                  Join Thousands of
                  <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Healthcare Professionals
                  </span>
                </h2>
                <p className="text-sm text-gray-500 max-w-md">
                  Start your journey with the most advanced clinic management system. Streamline operations, enhance
                  patient care, and grow your practice.
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What you'll get:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-700">30-day free trial with full access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-700">Personal dashboard and profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-700">24/7 priority customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-700">Personal health insights and tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-gray-900" />
                  </div>
                  <span className="text-sm text-gray-700">HIPAA-compliant security</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Secure</h3>
                    <p className="text-xs text-gray-600">Enterprise-grade</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Fast Setup</h3>
                    <p className="text-xs text-gray-600">5 minutes</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Team Ready</h3>
                    <p className="text-xs text-gray-600">Unlimited users</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Smart Analytics</h3>
                    <p className="text-xs text-gray-600">AI-powered</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-xs text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full max-w-lg mx-auto">
            <Card className="bg-white/90 backdrop-blur-2xl border-gray-200/50 shadow-xl shadow-gray-900/10">
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="flex justify-center mb-4">
                    <Image src={"/mubas-logo.png"} height={50} width={50} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Create Your Account</h3>
                  <p className="text-xs text-gray-600">Join the future of healthcare management</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">First Name</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                        </div>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Last Name</label>
                      <div className="relative group">
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                        placeholder="minttsaka@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Date of Birth */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                        </div>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                          placeholder="+256-99-000-0000"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Date of Birth
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                        </div>
                        <Input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="pl-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                          required
                          max={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-cyan-400 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Password strength:</span>
                          <span
                            className={`text-xs font-medium ${passwordStrength <= 2 ? "text-red-500" : passwordStrength <= 3 ? "text-yellow-500" : passwordStrength <= 4 ? "text-blue-500" : "text-green-500"}`}
                          >
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div
                            className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-11"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-cyan-400 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <div className="flex items-center space-x-1 text-red-500">
                        <AlertCircle className="w-3 h-3" />
                        <span className="text-xs">Passwords don't match</span>
                      </div>
                    )}
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-gray-200/50 bg-gray-50/50 text-cyan-400 focus:ring-cyan-400/25 focus:ring-offset-0"
                        required
                      />
                      <span className="text-xs text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.subscribeNewsletter}
                        onChange={(e) => handleInputChange("subscribeNewsletter", e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-gray-200/50 bg-gray-50/50 text-cyan-400 focus:ring-cyan-400/25 focus:ring-offset-0"
                      />
                      <span className="text-xs text-gray-700">
                        Subscribe to our newsletter for updates and healthcare insights
                      </span>
                    </label>
                  </div>

                  {/* Signup Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || !formData.agreeTerms || formData.password !== formData.confirmPassword}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-gray-900 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>

                {/* Footer */}
                <div className="text-center pt-4 border-t border-gray-200/10">
                  <p className="text-xs text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      Sign In
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Protected by enterprise-grade security • SOC 2 Compliant</p>
                </div>
              </div>
            </Card>

            {/* Mobile Logo */}
            <div className="lg:hidden text-center mt-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-gray-900" />
                </div>
                <span className="text-lg font-bold text-gray-900">Mubas Clinic</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Advanced Healthcare Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  )
}

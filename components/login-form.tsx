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
  Fingerprint,
  Sparkles,
} from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
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

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Features */}
          <div className="hidden lg:block space-y-8">
            {/* Logo & Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Activity className="w-7 h-7 text-gray-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-gray-900" />
                  </div>
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
                  Welcome to the Future of
                  <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Healthcare Management
                  </span>
                </h2>
                <p className="text-sm text-gray-500 max-w-md">
                  Experience next-generation clinic management with AI-powered insights, seamless workflows, and
                  unparalleled security.
                </p>
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
                    <h3 className="text-sm font-semibold text-gray-900">Secure Access</h3>
                    <p className="text-xs text-gray-600">Bank-level encryption</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Lightning Fast</h3>
                    <p className="text-xs text-gray-600">Sub-second response</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Multi-User</h3>
                    <p className="text-xs text-gray-600">Team collaboration</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-xl border-gray-200/50 p-4 hover:bg-white/90 transition-all duration-300 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">AI Analytics</h3>
                    <p className="text-xs text-gray-600">Smart insights</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-xs text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="bg-white/90 backdrop-blur-2xl border-gray-200/50 shadow-xl shadow-gray-900/10">
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Fingerprint className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Secure Access Portal</h3>
                  <p className="text-xs text-gray-600">Enter your credentials to access the system</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-12"
                        placeholder="doctor@mubasClinic.com"
                        required
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-focus-within:from-cyan-400/10 group-focus-within:via-transparent group-focus-within:to-blue-400/10 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-700 uppercase tracking-wider">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-4 h-4 text-gray-600 group-focus-within:text-cyan-400 transition-colors" />
                      </div>
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 bg-gray-50/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/25 text-sm h-12"
                        placeholder="Enter your secure password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-cyan-400 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-focus-within:from-cyan-400/10 group-focus-within:via-transparent group-focus-within:to-blue-400/10 pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Remember & Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-200/50 bg-gray-50/50 text-cyan-400 focus:ring-cyan-400/25 focus:ring-offset-0"
                      />
                      <span className="text-xs text-gray-700">Remember me</span>
                    </label>
                    <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-gray-900 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                        <span>Authenticating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Access System</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>

                  {/* Biometric Login */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-transparent px-2 text-gray-600">or continue with</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 bg-gray-50/50 border-gray-200/50 text-gray-900 hover:bg-gray-50/90 hover:border-gray-200/70 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Fingerprint className="w-4 h-4" />
                      <span className="text-sm">Biometric Authentication</span>
                    </div>
                  </Button>
                </form>

                {/* Footer */}
                <div className="text-center pt-4 border-t border-gray-200/10">
                  <p className="text-xs text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                      Request Access
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, ArrowRight, AlertCircle, BookOpen, Eye, EyeOff } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetLoading, setResetLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      })
      
      if (error) throw error

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', data.user.id)
        .single()

      if (userError) {
        console.error('User data error:', userError)
        toast.error('Could not load user data')
        setLoading(false)
        return
      }

      toast.success('Welcome back! 🎓')
      
      const role = userData?.role || 'student'
      setTimeout(() => {
        router.push(`/dashboard/${role}`)
        router.refresh()
      }, 500)
      
    } catch (error: any) {
      console.error('Login error:', error)
      toast.error(error.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setResetLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error

      toast.success('Password reset email sent! Check your inbox.')
      setShowForgotPassword(false)
      setResetEmail('')
    } catch (error: any) {
      toast.error(error.message || 'Failed to send reset email')
    } finally {
      setResetLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              TC ACADEMY
            </div>
            <div className="text-xs text-gray-500 font-semibold">Professional IT Education</div>
          </div>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-8">
          {!showForgotPassword ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Welcome Back
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sign in to continue your learning journey
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium transition"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      className="text-sm font-bold text-blue-600 hover:text-blue-700"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium transition"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Sign In Button - CLEARLY LABELED */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-lg border-2 border-blue-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {loading ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  ) : (
                    <>
                      <span>SIGN IN</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Don't have an account?{' '}
                  <Link href="/auth/register" className="font-bold text-blue-600 hover:text-blue-700">
                    Create Free Account
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Reset Password
                </h1>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Enter your email to receive a reset link
                </p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="flex-1 bg-gray-100 border-2 border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition text-base"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="flex-1 bg-blue-600 text-white font-bold py-3.5 rounded-xl disabled:opacity-50 shadow-lg hover:bg-blue-700 transition border-2 border-blue-600 text-base"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {resetLoading ? 'SENDING...' : 'SEND RESET LINK'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          By signing in, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Terminal, Mail, Lock, User, Globe, GraduationCap, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

const countries = [
  'Namibia', 'South Africa', 'Botswana', 'Zimbabwe', 'Zambia', 'Angola',
  'Kenya', 'Nigeria', 'Ghana', 'Egypt', 'Tanzania', 'Uganda', 'Ethiopia',
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
  'France', 'Netherlands', 'India', 'China', 'Japan', 'Brazil', 'Other'
]

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    role: 'student' as 'student' | 'lecturer',
    country: 'Namibia',
  })
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) throw authError

      const { error: profileError } = await supabase
        .from('users')
        .insert({
          id: authData.user!.id,
          email: formData.email,
          full_name: formData.fullName,
          role: formData.role,
          country: formData.country,
        })

      if (profileError) throw profileError

      toast.success('Account created! Welcome to IT Academies Nam! 🎉')
      router.push(`/dashboard/${formData.role}`)
    } catch (error: any) {
      toast.error(error.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)] relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--accent-primary)] rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
          <Terminal className="w-10 h-10 text-[var(--accent-primary)]" />
          <span className="font-display text-2xl font-bold gradient-text">
            IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
          </span>
        </Link>

        <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)] shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold mb-2">Join IT Academies Nam</h1>
            <p className="text-[var(--text-secondary)]">Start your journey to IT mastery</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            <StepIndicator number={1} active={step >= 1} label="Account" />
            <div className="w-12 h-0.5 bg-[var(--border-color)]" />
            <StepIndicator number={2} active={step >= 2} label="Profile" />
          </div>

          <form onSubmit={handleRegister}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-[var(--text-primary)] transition"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-[var(--text-primary)] transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-[var(--text-primary)] transition"
                      placeholder="••••••••"
                      minLength={6}
                      required
                    />
                  </div>
                  <p className="text-xs text-[var(--text-tertiary)] mt-1">At least 6 characters</p>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-[var(--text-primary)]">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <RoleCard
                      selected={formData.role === 'student'}
                      onClick={() => setFormData({ ...formData, role: 'student' })}
                      icon={<GraduationCap className="w-10 h-10" />}
                      title="Student"
                      description="Learning IT skills"
                      color="var(--accent-primary)"
                    />

                    <RoleCard
                      selected={formData.role === 'lecturer'}
                      onClick={() => setFormData({ ...formData, role: 'lecturer' })}
                      icon={<Users className="w-10 h-10" />}
                      title="Lecturer"
                      description="Teaching courses"
                      color="var(--accent-secondary)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                    Country
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent text-[var(--text-primary)] transition appearance-none cursor-pointer"
                      required
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 btn-secondary py-3"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                  >
                    {loading ? (
                      <div className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <Shield className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--text-secondary)] text-sm">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[var(--accent-primary)] hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-[var(--text-tertiary)] mt-8">
          By creating an account, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  )
}

function StepIndicator({ number, active, label }: { number: number, active: boolean, label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition ${
        active 
          ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white' 
          : 'border-[var(--border-color)] text-[var(--text-tertiary)]'
      }`}>
        {active ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      <span className={`text-sm font-medium hidden sm:block ${
        active ? 'text-[var(--accent-primary)]' : 'text-[var(--text-tertiary)]'
      }`}>
        {label}
      </span>
    </div>
  )
}

function RoleCard({ selected, onClick, icon, title, description, color }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-6 rounded-lg border-2 transition transform hover:scale-105 ${
        selected
          ? 'border-[var(--accent-primary)] bg-[var(--bg-tertiary)] shadow-lg'
          : 'border-[var(--border-color)] hover:border-[var(--accent-primary)]/50'
      }`}
    >
      <div className="mb-3 mx-auto" style={{ color: selected ? color : 'var(--text-tertiary)' }}>
        {icon}
      </div>
      <div className="font-bold text-lg mb-1">{title}</div>
      <div className="text-xs text-[var(--text-tertiary)]">{description}</div>
    </button>
  )
}

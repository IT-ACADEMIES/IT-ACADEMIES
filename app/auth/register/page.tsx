'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Terminal, Mail, Lock, User, Globe, GraduationCap, Users, Shield, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

const countries = [
  'Namibia', 'South Africa', 'Botswana', 'Zimbabwe', 'Kenya', 'Nigeria', 
  'Ghana', 'Egypt', 'United States', 'United Kingdom', 'Canada', 'Australia', 
  'Germany', 'France', 'India', 'China', 'Other'
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

      toast.success('Account created! Welcome to IT Academies Nam!')
      router.push(`/dashboard/${formData.role}`)
    } catch (error: any) {
      toast.error(error.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)]">
      <div className="w-full max-w-2xl">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
          <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
          <span className="font-display text-2xl font-bold gradient-text">
            IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
          </span>
        </Link>

        <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
          <h1 className="font-display text-3xl font-bold mb-2 text-center">Join IT Academies Nam</h1>
          <p className="text-[var(--text-secondary)] text-center mb-8">Start your journey to IT mastery</p>

          <form onSubmit={handleRegister}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
                      placeholder="••••••••"
                      minLength={6}
                      required
                    />
                  </div>
                </div>

                <button type="button" onClick={() => setStep(2)} className="w-full btn-primary">
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">I am a...</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'student' })}
                      className={`p-4 rounded-lg border-2 transition ${
                        formData.role === 'student'
                          ? 'border-[var(--accent-primary)] bg-[var(--bg-tertiary)]'
                          : 'border-[var(--border-color)]'
                      }`}
                    >
                      <GraduationCap className="w-8 h-8 mx-auto mb-2 text-[var(--accent-primary)]" />
                      <div className="font-medium">Student</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, role: 'lecturer' })}
                      className={`p-4 rounded-lg border-2 transition ${
                        formData.role === 'lecturer'
                          ? 'border-[var(--accent-primary)] bg-[var(--bg-tertiary)]'
                          : 'border-[var(--border-color)]'
                      }`}
                    >
                      <Users className="w-8 h-8 mx-auto mb-2 text-[var(--accent-secondary)]" />
                      <div className="font-medium">Lecturer</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
                      required
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 btn-secondary">
                    Back
                  </button>
                  <button type="submit" disabled={loading} className="flex-1 btn-primary flex items-center justify-center">
                    {loading ? (
                      <div className="loading-dots"><span></span><span></span><span></span></div>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <Shield className="w-5 h-5 ml-2" />
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
      </div>
    </div>
  )
}

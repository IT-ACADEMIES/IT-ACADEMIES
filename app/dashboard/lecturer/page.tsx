'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GraduationCap, LogOut, BookOpen, Users, Award, Plus } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function LecturerDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser()
    if (!authUser) {
      router.push('/auth/login')
      return
    }
    const { data: profile } = await supabase.from('users').select('*').eq('id', authUser.id).single()
    setUser(profile)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logged out')
    router.push('/')
  }

  if (!user) return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="loading-dots"><span></span><span></span><span></span></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <nav className="border-b border-[var(--border-color)] py-4 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-xl font-bold gradient-text">TC ACADEMY</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-[var(--text-secondary)]">Lecturer Portal</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            Welcome, <span className="gradient-text">{user.full_name}!</span> 📚
          </h1>
          <p className="text-[var(--text-secondary)]">
            Lecturer Dashboard - Manage your courses and students
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<BookOpen />} value={0} label="My Modules" />
          <StatCard icon={<Users />} value={0} label="Students" />
          <StatCard icon={<Award />} value={0} label="Assessments" />
        </div>

        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Modules</h2>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create Module</span>
            </button>
          </div>
          <div className="text-center py-12 text-[var(--text-tertiary)]">
            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No modules created yet</p>
            <p className="text-sm mt-2">Create your first module to get started</p>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-secondary text-red-500 border-red-500 flex items-center space-x-2">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

function StatCard({ icon, value, label }: any) {
  return (
    <div className="card">
      <div className="mb-3 text-[var(--accent-primary)]">{icon}</div>
      <div className="text-3xl font-bold gradient-text">{value}</div>
      <div className="text-sm text-[var(--text-tertiary)]">{label}</div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Terminal, LogOut, Users, BookOpen, Shield } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function CEODashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({ totalUsers: 0, totalCourses: 0 })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser()
    if (!authUser) {
      router.push('/auth/login')
      return
    }

    const { data: profile } = await supabase.from('users').select('*').eq('id', authUser.id).single()
    if (profile?.role !== 'ceo') {
      router.push('/dashboard/student')
      return
    }
    setUser(profile)

    const { count: userCount } = await supabase.from('users').select('*', { count: 'exact', head: true })
    const { count: courseCount } = await supabase.from('courses').select('*', { count: 'exact', head: true })
    setStats({ totalUsers: userCount || 0, totalCourses: courseCount || 0 })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logged out')
    router.push('/')
  }

  if (!user) return <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
    <div className="loading-dots"><span></span><span></span><span></span></div>
  </div>

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-[var(--accent-primary)]" />
            <span className="font-display text-xl font-bold gradient-text">IT ACADEMIES.NAM</span>
          </Link>
          <div className="px-3 py-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg">
            <Shield className="w-4 h-4 inline text-white mr-1" />
            <span className="text-sm font-bold text-white">CEO</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-display text-4xl font-bold mb-4">CEO Dashboard 🚀</h1>
        <p className="text-[var(--text-secondary)] mb-8">Welcome, {user.full_name}. Platform overview:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <Users className="w-8 h-8 text-[var(--accent-primary)] mb-2" />
            <div className="text-3xl font-bold">{stats.totalUsers}</div>
            <div className="text-sm text-[var(--text-tertiary)]">Total Users</div>
          </div>
          <div className="card">
            <BookOpen className="w-8 h-8 text-[var(--accent-secondary)] mb-2" />
            <div className="text-3xl font-bold">{stats.totalCourses}</div>
            <div className="text-sm text-[var(--text-tertiary)]">Total Courses</div>
          </div>
        </div>

        <div className="card mb-6">
          <h2 className="text-2xl font-bold mb-4">Platform Status</h2>
          <p className="text-green-500">✓ All systems operational</p>
        </div>

        <button onClick={handleLogout} className="btn-secondary text-red-500 border-red-500">
          <LogOut className="w-5 h-5 mr-2" />Logout
        </button>
      </div>
    </div>
  )
}

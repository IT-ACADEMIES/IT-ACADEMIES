'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Terminal, LogOut, BookOpen, Trophy } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function StudentDashboard() {
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
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-display text-4xl font-bold mb-4">
          Welcome, <span className="gradient-text">{user.full_name}!</span> 👋
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">Ready to continue learning? {user.country && `🌍 ${user.country}`}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <BookOpen className="w-8 h-8 text-[var(--accent-primary)] mb-2" />
            <div className="text-3xl font-bold">0</div>
            <div className="text-sm text-[var(--text-tertiary)]">Courses Enrolled</div>
          </div>
          <div className="card">
            <Trophy className="w-8 h-8 text-[var(--accent-secondary)] mb-2" />
            <div className="text-3xl font-bold">-</div>
            <div className="text-sm text-[var(--text-tertiary)]">Global Rank</div>
          </div>
        </div>

        <div className="card mb-6">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="text-[var(--text-secondary)] mb-4">Browse our courses and start learning!</p>
          <Link href="/" className="btn-primary">Explore Courses</Link>
        </div>

        <button onClick={handleLogout} className="btn-secondary text-red-500 border-red-500">
          <LogOut className="w-5 h-5 mr-2" />Logout
        </button>
      </div>
    </div>
  )
}

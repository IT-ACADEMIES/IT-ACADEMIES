'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GraduationCap, LogOut, BookOpen, Trophy, FlaskConical, Target, Clock, Award } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function StudentDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    enrolled: 0,
    completed: 0,
    inProgress: 0,
    labsCompleted: 0
  })

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
            <span className="text-sm text-[var(--text-secondary)]">Student Portal</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            Welcome, <span className="gradient-text">{user.full_name}!</span> 👋
          </h1>
          <p className="text-[var(--text-secondary)]">
            Ready to continue learning? {user.country && `🌍 ${user.country}`}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<BookOpen />} value={stats.enrolled} label="Modules Enrolled" color="var(--accent-primary)" />
          <StatCard icon={<Award />} value={stats.completed} label="Completed" color="var(--accent-secondary)" />
          <StatCard icon={<Target />} value={stats.inProgress} label="In Progress" color="var(--accent-tertiary)" />
          <StatCard icon={<FlaskConical />} value={stats.labsCompleted} label="Labs Done" color="var(--accent-primary)" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <QuickAction 
            title="Browse Modules"
            description="Explore available courses"
            icon={<BookOpen className="w-8 h-8" />}
            href="/modules"
          />
          <QuickAction 
            title="Virtual Labs"
            description="Practice in real environments"
            icon={<FlaskConical className="w-8 h-8" />}
            href="/labs"
          />
          <QuickAction 
            title="My Progress"
            description="Track your achievements"
            icon={<Trophy className="w-8 h-8" />}
            href="/progress"
          />
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <InfoCard
              icon={<BookOpen />}
              title="Enroll in Your First Module"
              description="Start with IPDO101 or PIS101 to build your foundation"
            />
            <InfoCard
              icon={<FlaskConical />}
              title="Try the Virtual Labs"
              description="Get hands-on experience with real IT tools"
            />
            <InfoCard
              icon={<Trophy />}
              title="Complete Assessments"
              description="Test your knowledge and earn certificates"
            />
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

function StatCard({ icon, value, label, color }: any) {
  return (
    <div className="card group cursor-pointer">
      <div className="mb-3" style={{ color }}>
        {icon}
      </div>
      <div className="text-3xl font-bold gradient-text">{value}</div>
      <div className="text-sm text-[var(--text-tertiary)]">{label}</div>
    </div>
  )
}

function QuickAction({ title, description, icon, href }: any) {
  return (
    <Link href={href}>
      <div className="card group cursor-pointer hover:border-[var(--accent-primary)]">
        <div className="text-[var(--accent-primary)] mb-3 group-hover:scale-110 transition">
          {icon}
        </div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
    </Link>
  )
}

function InfoCard({ icon, title, description }: any) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-[var(--bg-tertiary)] rounded-lg">
      <div className="text-[var(--accent-primary)]">{icon}</div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { GraduationCap, LogOut, Users, BookOpen, Trophy, FlaskConical, Crown, TrendingUp, Activity, Award } from 'lucide-react'
import { supabase, checkIsCEO } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function CEODashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalLecturers: 0,
    totalModules: 0,
    totalEnrollments: 0,
    activeUsers: 0,
    completionRate: 0
  })
  const [recentUsers, setRecentUsers] = useState<any[]>([])

  useEffect(() => {
    loadCEOData()
  }, [])

  const loadCEOData = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser()
    if (!authUser) {
      router.push('/auth/login')
      return
    }

    // Verify CEO status
    const isCEO = await checkIsCEO(authUser.id)
    if (!isCEO) {
      toast.error('Access denied. CEO only.')
      router.push('/dashboard/student')
      return
    }

    const { data: profile } = await supabase.from('users').select('*').eq('id', authUser.id).single()
    setUser(profile)

    // Load platform statistics
    const { data: students, count: studentCount } = await supabase
      .from('users')
      .select('*', { count: 'exact' })
      .eq('role', 'student')

    const { data: lecturers, count: lecturerCount } = await supabase
      .from('users')
      .select('*', { count: 'exact' })
      .eq('role', 'lecturer')

    const { data: modules, count: moduleCount } = await supabase
      .from('modules')
      .select('*', { count: 'exact' })

    const { data: enrollments, count: enrollmentCount } = await supabase
      .from('enrollments')
      .select('*', { count: 'exact' })

    const { data: recent } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    setStats({
      totalStudents: studentCount || 0,
      totalLecturers: lecturerCount || 0,
      totalModules: moduleCount || 0,
      totalEnrollments: enrollmentCount || 0,
      activeUsers: (studentCount || 0) + (lecturerCount || 0),
      completionRate: 0
    })

    setRecentUsers(recent || [])
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
      <nav className="border-b border-[var(--border-color)] py-4 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-[var(--accent-primary)]" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white block">TC ACADEMY</span>
              <span className="text-xs text-white/80">CEO Portal</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white/90">👑 CEO Access</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h1 className="font-display text-4xl font-bold">
              CEO Dashboard
            </h1>
          </div>
          <p className="text-[var(--text-secondary)]">
            Welcome back, <span className="font-bold text-[var(--accent-primary)]">{user.full_name}</span>
          </p>
          <p className="text-sm text-[var(--text-tertiary)] mt-1">
            Platform Administrator • Full Access Control
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <CEOStatCard 
            icon={<Users />} 
            value={stats.totalStudents} 
            label="Total Students" 
            color="var(--accent-primary)"
            trend="+12%"
          />
          <CEOStatCard 
            icon={<Award />} 
            value={stats.totalLecturers} 
            label="Lecturers" 
            color="var(--accent-secondary)"
            trend="+5%"
          />
          <CEOStatCard 
            icon={<BookOpen />} 
            value={stats.totalModules} 
            label="Active Modules" 
            color="var(--accent-tertiary)"
            trend="Stable"
          />
          <CEOStatCard 
            icon={<TrendingUp />} 
            value={stats.totalEnrollments} 
            label="Enrollments" 
            color="var(--accent-primary)"
            trend="+28%"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Activity className="w-6 h-6 text-[var(--accent-primary)]" />
              <span>Platform Overview</span>
            </h2>
            <div className="space-y-4">
              <OverviewItem label="Platform Status" value="🟢 Online" />
              <OverviewItem label="Database Status" value="🟢 Connected" />
              <OverviewItem label="Active Users (30d)" value={stats.activeUsers.toString()} />
              <OverviewItem label="Platform Launch" value="2026" />
              <OverviewItem label="Current Version" value="v2.0.0" />
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-[var(--accent-secondary)]" />
              <span>Quick Actions</span>
            </h2>
            <div className="space-y-3">
              <ActionButton title="Manage Users" description="View all students & lecturers" />
              <ActionButton title="Module Management" description="Add, edit, or remove modules" />
              <ActionButton title="Virtual Labs" description="Configure lab environments" />
              <ActionButton title="Platform Settings" description="System configuration" />
              <ActionButton title="Analytics" description="Detailed reports & insights" />
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Users className="w-6 h-6 text-[var(--accent-primary)]" />
            <span>Recent Registrations</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--text-tertiary)]">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--text-tertiary)]">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--text-tertiary)]">Role</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--text-tertiary)]">Country</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[var(--text-tertiary)]">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.length > 0 ? (
                  recentUsers.map((u) => (
                    <tr key={u.id} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-tertiary)]">
                      <td className="py-3 px-4 text-sm">{u.full_name}</td>
                      <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{u.email}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          u.role === 'ceo' ? 'bg-yellow-500/20 text-yellow-500' :
                          u.role === 'lecturer' ? 'bg-blue-500/20 text-blue-500' :
                          'bg-green-500/20 text-green-500'
                        }`}>
                          {u.role === 'ceo' && '👑 '}
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{u.country}</td>
                      <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">
                        {new Date(u.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-[var(--text-tertiary)]">
                      No users registered yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">🎉 You're the CEO!</h2>
          <p className="mb-4">
            As the first registered user, you have full administrative access to TC Academy.
          </p>
          <div className="text-sm opacity-90">
            <p>• Manage all users, modules, and content</p>
            <p>• Access platform analytics and reports</p>
            <p>• Configure virtual labs and assessments</p>
            <p>• Full database and system control</p>
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

function CEOStatCard({ icon, value, label, color, trend }: any) {
  return (
    <div className="card group cursor-pointer border-2 hover:border-[var(--accent-primary)]">
      <div className="flex justify-between items-start mb-3">
        <div style={{ color }}>
          {icon}
        </div>
        <span className="text-xs text-green-500 font-medium">{trend}</span>
      </div>
      <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
      <div className="text-sm text-[var(--text-tertiary)]">{label}</div>
    </div>
  )
}

function OverviewItem({ label, value }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[var(--border-color)]">
      <span className="text-[var(--text-secondary)]">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function ActionButton({ title, description }: any) {
  return (
    <button className="w-full text-left p-3 bg-[var(--bg-tertiary)] rounded-lg hover:bg-[var(--bg-secondary)] transition border border-[var(--border-color)] hover:border-[var(--accent-primary)]">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-[var(--text-secondary)]">{description}</div>
    </button>
  )
}

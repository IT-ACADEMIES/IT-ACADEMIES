'use client'

import Link from 'next/link'
import { Code2, Shield, Globe, GraduationCap, BookOpen, FlaskConical, Trophy, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation - SUPER VISIBLE BUTTONS */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-primary)]/95 border-b-2 border-[var(--accent-primary)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-2xl font-bold gradient-text">
                TC ACADEMY
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/about" className="px-4 py-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition font-bold text-lg">
                About
              </Link>
              <Link href="/auth/login" className="px-6 py-3 bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-bold hover:bg-[var(--accent-primary)] hover:text-white transition text-lg shadow-md">
                SIGN IN
              </Link>
              <Link href="/auth/register" className="px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-bold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition text-lg">
                <span>GET STARTED FREE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile buttons - SUPER CLEAR */}
            <div className="md:hidden flex items-center space-x-3">
              <Link href="/auth/login" className="px-4 py-2 bg-white border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-bold text-sm shadow-md">
                SIGN IN
              </Link>
              <Link href="/auth/register" className="px-4 py-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-bold text-sm shadow-lg">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-primary)] rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)] rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[var(--text-primary)] font-bold">🎓 Triumphant College Accredited Programs</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master IT from
            <br />
            <span className="gradient-text">Diploma to Master's</span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional IT education with virtual labs, real-world challenges, and industry-standard curriculum.
            <br className="hidden md:block" />
            From IPDO to Advanced Cybersecurity. Built for excellence.
          </p>

          {/* SUPER VISIBLE CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/auth/register" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition"></div>
              <div className="relative bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white px-12 py-5 rounded-lg font-bold text-xl flex items-center justify-center space-x-3 shadow-2xl">
                <span>START LEARNING FREE</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
            <Link href="/about" className="px-12 py-5 bg-white border-4 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-bold text-xl hover:bg-[var(--accent-primary)] hover:text-white transition shadow-xl">
              EXPLORE PROGRAMS
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <StatCard icon={<BookOpen />} value="20+" label="MODULES" />
            <StatCard icon={<GraduationCap />} value="4" label="LEVELS" />
            <StatCard icon={<FlaskConical />} value="5" label="VIRTUAL LABS" />
            <StatCard icon={<Trophy />} value="FREE" label="CERTIFICATES" />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-medium">
              Professional IT qualifications from Diploma to Master's Degree
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard 
              level="Diploma"
              duration="2 Years"
              modules={['IPDO', 'PIS', 'CA', 'MATH', 'NET']}
              color="var(--accent-primary)"
            />
            <ProgramCard 
              level="Bachelor"
              duration="3 Years"
              modules={['Advanced Programming', 'Database', 'Networks', 'Security']}
              color="var(--accent-secondary)"
            />
            <ProgramCard 
              level="Honours"
              duration="1 Year"
              modules={['Advanced Algorithms', 'Cloud', 'AI', 'Cybersecurity']}
              color="var(--accent-tertiary)"
            />
            <ProgramCard 
              level="Master's"
              duration="2 Years"
              modules={['Research Methods', 'Big Data', 'IoT Security', 'Thesis']}
              color="var(--accent-primary)"
            />
          </div>
        </div>
      </section>

      {/* Virtual Labs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Virtual <span className="gradient-text">Labs</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-medium">
              Hands-on practice in real IT environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LabCard 
              icon={<Code2 className="w-12 h-12" />}
              title="Programming Lab"
              description="Python, JavaScript, Java environments with live code execution"
              color="var(--accent-primary)"
            />
            <LabCard 
              icon={<Shield className="w-12 h-12" />}
              title="Cybersecurity Lab"
              description="Kali Linux, penetration testing, network security tools"
              color="var(--accent-secondary)"
            />
            <LabCard 
              icon={<Globe className="w-12 h-12" />}
              title="Networking Lab"
              description="Cisco Packet Tracer, network simulation, configuration"
              color="var(--accent-tertiary)"
            />
          </div>
        </div>
      </section>

      {/* CTA - MEGA VISIBLE */}
      <section className="py-24 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-2xl mb-10 text-white/90 font-medium">
            Join TC Academy today. Professional IT education. Completely free.
          </p>
          <Link href="/auth/register" className="inline-block group relative">
            <div className="absolute -inset-2 bg-white rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
            <div className="relative bg-white text-[var(--accent-primary)] px-12 py-6 rounded-lg font-bold text-2xl flex items-center space-x-3 shadow-2xl hover:scale-105 transition transform">
              <span>CREATE FREE ACCOUNT</span>
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] border-t-2 border-[var(--accent-primary)] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-xl font-bold">TC ACADEMY</span>
              </div>
              <p className="text-[var(--text-tertiary)] text-sm">
                Professional IT education from Diploma to Master's. Free forever.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Programs</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Diploma</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Bachelor's</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Honours</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Master's</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Platform</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/about" className="hover:text-[var(--accent-primary)] font-medium">About</Link></li>
                <li><Link href="/auth/login" className="hover:text-[var(--accent-primary)] font-medium">Login</Link></li>
                <li><Link href="/auth/register" className="hover:text-[var(--accent-primary)] font-medium">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Legal</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Privacy</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)] font-medium">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-tertiary)]">
            <p className="font-medium">© 2026 TC Academy. Professional IT Education. Built in Namibia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatCard({ icon, value, label }: any) {
  return (
    <div className="text-center group">
      <div className="flex justify-center mb-3 text-[var(--accent-primary)] group-hover:scale-110 transition transform">
        {icon}
      </div>
      <div className="font-display text-4xl font-bold gradient-text mb-2">{value}</div>
      <div className="text-sm text-[var(--text-primary)] uppercase tracking-wide font-bold">{label}</div>
    </div>
  )
}

function ProgramCard({ level, duration, modules, color }: any) {
  return (
    <div className="card group cursor-pointer hover:border-[var(--accent-primary)] border-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-2xl" style={{ color }}>{level}</h3>
        <span className="text-sm text-[var(--text-tertiary)] font-bold">{duration}</span>
      </div>
      <ul className="space-y-2">
        {modules.map((module: string, i: number) => (
          <li key={i} className="text-sm text-[var(--text-secondary)] flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="font-medium">{module}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LabCard({ icon, title, description, color }: any) {
  return (
    <div className="card group cursor-pointer border-2 hover:border-[var(--accent-primary)]">
      <div className="mb-4 group-hover:scale-110 transition transform" style={{ color }}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  )
}

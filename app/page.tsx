'use client'

import Link from 'next/link'
import { Terminal, Code2, Shield, Globe, GraduationCap, Users, Trophy, ArrowRight, BookOpen, FlaskConical } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-2xl font-bold gradient-text">
                TC ACADEMY
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition font-medium">
                About
              </Link>
              <Link href="/programs" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition font-medium">
                Programs
              </Link>
              <Link href="/auth/login" className="btn-secondary px-6 py-2.5">
                Sign In
              </Link>
              <Link href="/auth/register" className="btn-primary px-6 py-2.5 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <Link href="/auth/login" className="btn-secondary text-sm px-4 py-2">
                Sign In
              </Link>
              <Link href="/auth/register" className="btn-primary text-sm px-4 py-2">
                Sign Up
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
          <div className="inline-flex items-center space-x-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[var(--text-secondary)] font-medium">Triumphant College Accredited Programs</span>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/register" className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4 hover:bg-[var(--bg-tertiary)]">
              Explore Programs
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <StatCard icon={<BookOpen />} value="20+" label="Modules" />
            <StatCard icon={<GraduationCap />} value="4" label="Levels" />
            <StatCard icon={<FlaskConical />} value="5" label="Virtual Labs" />
            <StatCard icon={<Trophy />} value="Free" label="Certificates" />
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
            <p className="text-xl text-[var(--text-secondary)]">
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
            <p className="text-xl text-[var(--text-secondary)]">
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join TC Academy today. Professional IT education. Completely free.
          </p>
          <Link href="/auth/register" className="inline-flex items-center space-x-2 bg-white text-[var(--bg-primary)] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition transform shadow-xl">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12 px-4">
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
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Diploma</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Bachelor's</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Honours</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Master's</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Platform</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/about" className="hover:text-[var(--accent-primary)]">About</Link></li>
                <li><Link href="/auth/login" className="hover:text-[var(--accent-primary)]">Login</Link></li>
                <li><Link href="/auth/register" className="hover:text-[var(--accent-primary)]">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Legal</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Privacy</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-tertiary)]">
            <p>© 2026 TC Academy. Professional IT Education. Built in Namibia.</p>
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
      <div className="text-sm text-[var(--text-tertiary)] uppercase tracking-wide">{label}</div>
    </div>
  )
}

function ProgramCard({ level, duration, modules, color }: any) {
  return (
    <div className="card group cursor-pointer hover:border-[var(--accent-primary)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-2xl" style={{ color }}>{level}</h3>
        <span className="text-sm text-[var(--text-tertiary)]">{duration}</span>
      </div>
      <ul className="space-y-2">
        {modules.map((module: string, i: number) => (
          <li key={i} className="text-sm text-[var(--text-secondary)] flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            <span>{module}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LabCard({ icon, title, description, color }: any) {
  return (
    <div className="card group cursor-pointer">
      <div className="mb-4 group-hover:scale-110 transition transform" style={{ color }}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  )
}

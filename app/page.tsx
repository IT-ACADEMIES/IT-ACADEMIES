'use client'

import Link from 'next/link'
import { Terminal, Code2, Shield, Globe, GraduationCap, Users, Trophy } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
              <span className="font-display text-2xl font-bold gradient-text">
                IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="btn-secondary">Login</Link>
              <Link href="/auth/register" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Master IT Skills from
            <br />
            <span className="gradient-text">Diploma to PhD</span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto">
            Join students worldwide in learning Programming, Cybersecurity, Web Development, and more. 
            Based on international syllabi. Built for Namibia. Available globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn-primary text-lg px-8 py-4">
              Start Learning Free
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <Code2 className="w-8 h-8 mx-auto mb-2 text-[var(--accent-primary)]" />
              <div className="font-display text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-[var(--text-tertiary)]">IT Subjects</div>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-2 text-[var(--accent-primary)]" />
              <div className="font-display text-3xl font-bold gradient-text">4</div>
              <div className="text-sm text-[var(--text-tertiary)]">Qualification Levels</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-[var(--accent-primary)]" />
              <div className="font-display text-3xl font-bold gradient-text">Global</div>
              <div className="text-sm text-[var(--text-tertiary)]">Community</div>
            </div>
            <div className="text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-[var(--accent-primary)]" />
              <div className="font-display text-3xl font-bold gradient-text">Free</div>
              <div className="text-sm text-[var(--text-tertiary)]">Certificates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-12">
            Comprehensive <span className="gradient-text">IT Curriculum</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <Code2 className="w-10 h-10 text-[var(--accent-primary)] mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Programming</h3>
              <p className="text-sm text-[var(--text-secondary)]">Python • JavaScript • Java</p>
            </div>
            <div className="card">
              <Shield className="w-10 h-10 text-[var(--accent-secondary)] mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Cybersecurity</h3>
              <p className="text-sm text-[var(--text-secondary)]">Ethical Hacking • Security+</p>
            </div>
            <div className="card">
              <Globe className="w-10 h-10 text-[var(--accent-tertiary)] mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Web Development</h3>
              <p className="text-sm text-[var(--text-secondary)]">HTML/CSS • React • Node.js</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your IT Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition transform">
            Create Free Account
          </Link>
        </div>
      </section>

      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}

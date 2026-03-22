'use client'

import Link from 'next/link'
import { Terminal, Code2, Shield, Globe, GraduationCap, Users, Trophy, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Terminal className="w-10 h-10 text-[var(--accent-primary)]" />
              <span className="font-display text-2xl font-bold gradient-text">
                IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition font-medium">
                About
              </Link>
              <Link href="/auth/login" className="btn-secondary px-6 py-2.5">
                Sign In
              </Link>
              <Link href="/auth/register" className="btn-primary px-6 py-2.5 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile buttons */}
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
        {/* Animated Background Circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-primary)] rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[var(--text-secondary)] font-medium">Free World-Class IT Education</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master IT Skills from
            <br />
            <span className="gradient-text">Diploma to PhD</span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Join students worldwide learning Programming, Cybersecurity, Web Development, and more. 
            <br className="hidden md:block" />
            Based on international syllabi. Built for Namibia. Available globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/register" className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4 hover:bg-[var(--bg-tertiary)]">
              Learn More
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <StatCard icon={<Code2 />} value="10+" label="IT Subjects" />
            <StatCard icon={<GraduationCap />} value="4" label="Levels" />
            <StatCard icon={<Users />} value="Global" label="Community" />
            <StatCard icon={<Trophy />} value="Free" label="Certificates" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="gradient-text">IT Curriculum</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              All subjects. All levels. Diploma → Bachelor → Master → PhD
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              icon={<Code2 className="w-12 h-12" />}
              title="Programming"
              description="Python, JavaScript, Java, C++"
              color="var(--accent-primary)"
            />
            <CourseCard 
              icon={<Shield className="w-12 h-12" />}
              title="Cybersecurity"
              description="Ethical Hacking, Security+, Kali Linux"
              color="var(--accent-secondary)"
            />
            <CourseCard 
              icon={<Globe className="w-12 h-12" />}
              title="Web Development"
              description="HTML/CSS, React, Node.js, Full-Stack"
              color="var(--accent-tertiary)"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/auth/register" className="btn-primary px-8 py-3 inline-flex items-center space-x-2">
              <span>Explore All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your IT Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students learning world-class IT skills. Completely free.
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
                <Terminal className="w-6 h-6 text-[var(--accent-primary)]" />
                <span className="font-display text-xl font-bold">IT ACADEMIES.NAM</span>
              </div>
              <p className="text-[var(--text-tertiary)] text-sm">
                World-class IT education from Diploma to PhD level. Free forever.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Platform</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/about" className="hover:text-[var(--accent-primary)]">About Us</Link></li>
                <li><Link href="/auth/register" className="hover:text-[var(--accent-primary)]">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Support</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/auth/login" className="hover:text-[var(--accent-primary)]">Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Legal</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-tertiary)]">
            <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
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

function CourseCard({ icon, title, description, color }: any) {
  return (
    <div className="card group cursor-pointer hover:border-[var(--accent-primary)]">
      <div className="mb-4 group-hover:scale-110 transition transform" style={{ color }}>
        {icon}
      </div>
      <h3 className="font-bold text-2xl mb-3 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Code2, Shield, Globe, GraduationCap, Users, Trophy, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Terminal className="w-10 h-10 text-[var(--accent-primary)]" />
              <span className="font-display text-2xl font-bold gradient-text">
                IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition font-medium">
                About
              </Link>
              <Link href="/auth/login" className="btn-secondary px-6 py-2.5">
                Sign In
              </Link>
              <Link href="/auth/register" className="btn-primary px-6 py-2.5 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile buttons */}
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
        {/* Animated Background Circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-primary)] rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[var(--text-secondary)] font-medium">Free World-Class IT Education</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master IT Skills from
            <br />
            <span className="gradient-text">Diploma to PhD</span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Join students worldwide learning Programming, Cybersecurity, Web Development, and more. 
            <br className="hidden md:block" />
            Based on international syllabi. Built for Namibia. Available globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/register" className="btn-primary text-lg px-10 py-4 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4 hover:bg-[var(--bg-tertiary)]">
              Learn More
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <StatCard icon={<Code2 />} value="10+" label="IT Subjects" />
            <StatCard icon={<GraduationCap />} value="4" label="Levels" />
            <StatCard icon={<Users />} value="Global" label="Community" />
            <StatCard icon={<Trophy />} value="Free" label="Certificates" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="gradient-text">IT Curriculum</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)]">
              All subjects. All levels. Diploma → Bachelor → Master → PhD
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              icon={<Code2 className="w-12 h-12" />}
              title="Programming"
              description="Python, JavaScript, Java, C++"
              color="var(--accent-primary)"
            />
            <CourseCard 
              icon={<Shield className="w-12 h-12" />}
              title="Cybersecurity"
              description="Ethical Hacking, Security+, Kali Linux"
              color="var(--accent-secondary)"
            />
            <CourseCard 
              icon={<Globe className="w-12 h-12" />}
              title="Web Development"
              description="HTML/CSS, React, Node.js, Full-Stack"
              color="var(--accent-tertiary)"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/auth/register" className="btn-primary px-8 py-3 inline-flex items-center space-x-2">
              <span>Explore All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your IT Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students learning world-class IT skills. Completely free.
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
                <Terminal className="w-6 h-6 text-[var(--accent-primary)]" />
                <span className="font-display text-xl font-bold">IT ACADEMIES.NAM</span>
              </div>
              <p className="text-[var(--text-tertiary)] text-sm">
                World-class IT education from Diploma to PhD level. Free forever.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Platform</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/about" className="hover:text-[var(--accent-primary)]">About Us</Link></li>
                <li><Link href="/auth/register" className="hover:text-[var(--accent-primary)]">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Support</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><Link href="/auth/login" className="hover:text-[var(--accent-primary)]">Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[var(--text-primary)]">Legal</h3>
              <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--accent-primary)]">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-tertiary)]">
            <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
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

function CourseCard({ icon, title, description, color }: any) {
  return (
    <div className="card group cursor-pointer hover:border-[var(--accent-primary)]">
      <div className="mb-4 group-hover:scale-110 transition transform" style={{ color }}>
        {icon}
      </div>
      <h3 className="font-bold text-2xl mb-3 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  )
}

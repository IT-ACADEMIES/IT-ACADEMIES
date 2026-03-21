'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built with 💙 in Namibia for the World.</p>
        </div>
      </footer>
    </div>
  )
}'use client'

import Link from 'next/link'
import { Terminal, Target, Globe, Users, Shield, Trophy, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border-color)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-[var(--accent-primary)]" />
            <span className="font-display text-2xl font-bold gradient-text">
              IT ACADEMIES<span className="text-[var(--accent-secondary)]">.NAM</span>
            </span>
          </Link>
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            About <span className="gradient-text">IT Academies Nam</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Democratizing world-class IT education. From Namibia, for the world.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="card">
            <Target className="w-12 h-12 text-[var(--accent-primary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To become Africa's leading platform for IT education, bridging the gap between local talent and global opportunities.
            </p>
          </div>

          <div className="card">
            <Trophy className="w-12 h-12 text-[var(--accent-secondary)] mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              To provide free, comprehensive, internationally-accredited IT education from Diploma to PhD level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-[var(--border-color)]">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">CEO</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-2">Meet the Founder</h2>
              <p className="text-[var(--accent-primary)] font-medium">CEO & Founder</p>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The Story:</strong><br />
                "As an IT student in Namibia, I saw the gap between what we learn locally and what the global tech industry demands. I built IT Academies Nam to bridge that gap—creating a platform where Namibian students can access the same world-class IT education as students in Silicon Valley, while staying rooted in our local context.
              </p>

              <p className="text-lg">
                This platform isn't just about courses—it's about building a community of tech innovators who will put Namibia on the global tech map."
              </p>

              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Mission:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide free, high-quality IT education</li>
                <li>Create clear pathways from Diploma to PhD</li>
                <li>Support students in reaching international standards</li>
                <li>Foster innovation and entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <Link href="/auth/register" className="inline-flex items-center bg-white text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold">
            <span>Create Free Account</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--bg-secondary)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-[var(--text-tertiary)]">
          <p>© 2026 IT Academies Nam. Built by Ernestus Olsen in Namibia for the World.#POSITIVE EDUCATION ACTIVATES CONSTANT ELEVATION#</p>
        </div>
      </footer>
    </div>
  )
}

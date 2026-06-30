'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Certificates from '@/components/Certificates'
import TechMarquee from '@/components/TechMarquee'
import Skills from '@/components/Skills'
import ProjectsStage from '@/components/Projects/ProjectsStage'
import Contact from '@/components/Contact'

import { experiences } from '@/data/experiences'
import { educations } from '@/data/education'
import { certificates } from '@/data/certificates'
import { skillGroups } from '@/data/skills'
import { projects } from '@/data/projects'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function SectionBlock({ title, sub, delay = 0, children }: {
  title: string; sub?: string; delay?: number; children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 72 }}>
      <div className={`reveal reveal-delay-${delay}`} style={{ marginBottom: sub ? 0 : 32 }}>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-subtitle">{sub}</p>}
      </div>
      {children}
    </div>
  )
}

export default function HomePage() {
  const { theme, toggle } = useTheme()
  const router = useRouter()
  useScrollReveal()

  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />

        <div style={{ paddingBottom: 80 }}>
          <div className="container">
            <SectionBlock title="WORK EXPERIENCE" delay={1}>
              <Timeline items={experiences.map(e => ({ period: e.period, org: e.org, role: e.role, bullets: e.bullets }))} />
            </SectionBlock>

            <SectionBlock title="EDUCATION" delay={1}>
              <Timeline items={educations.map(e => ({ period: e.period, org: e.org, bullets: e.bullets }))} />
            </SectionBlock>

            <SectionBlock title="CERTIFICATES">
              <Certificates items={certificates} />
            </SectionBlock>
          </div>
        </div>

        <TechMarquee />
        <Skills groups={skillGroups} />
        <ProjectsStage
          projects={projects}
          onSelect={(p) => router.push(`/projects/${p.slug}`)}
        />
        <Contact />
      </main>
    </>
  )
}

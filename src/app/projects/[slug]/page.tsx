import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectDetailPage from '@/components/Projects/ProjectDetailPage'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return { title: 'Project | yeon.dev' }

  return {
    title: project.title,
    description: project.summary.replace(/\n/g, ' '),
    openGraph: {
      title: `${project.title} | yeon.dev`,
      description: project.summary.replace(/\n/g, ' '),
      images: project.thumbnail ? [{ url: project.thumbnail, width: 1200, height: 630 }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | yeon.dev`,
      description: project.summary.replace(/\n/g, ' '),
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()
  return <ProjectDetailPage project={project} />
}

import type { HeadersFunction, LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'

import { AnimatePresence, motion } from 'framer-motion'

import { AnimatedLetters, AnimatedText } from '~/components/animated-text'
import { SideProjectItem } from '~/components/side-project-item'

export const meta: MetaFunction = () => ({
  title: 'Side Projects - Sami Hindi',
  description:
    "I'm a 16 year old self-taught entrepreneur & full-stack developer, focused on user experience, accessibility and modern web technologies.",
})

export const headers: HeadersFunction = () => ({
  'Cache-Control': 'max-age=600, s-maxage=3600',
})

export type Sideproject = {
  id: number
  name: string
  area: string
  url: string
  image: string
  imageAlt: string
  color?: string
  repo?: string
  stars?: number
}

export type LoaderData = {
  projects: Required<Sideproject[]>
}

export const loader: LoaderFunction = async () => {
  const sideProjects: Sideproject[] = [
    {
      id: 0,
      name: 'Yt2Mp4',
      area: 'YouTube Video Downloader',
      image: 'https://i.imgur.com/EKFd0bd.png',
      imageAlt: 'Yt2Mp4 by Sami Hindi',
      repo: 'fujiwarachoki/yt2mp4',
      url: 'https://github.com/FujiwaraChoki/yt2mp4',
      color: '#4D4E52',
    },
    {
      id: 1,
      name: 'motivate.',
      area: 'Chrome Extension',
      image:
        'https://camo.githubusercontent.com/90c2958fd9aa08ab29ad183642c1a8a9c7fa7943437b7ae00a3f251c97038225/68747470733a2f2f692e696d6775722e636f6d2f725277314d66622e706e67',
      imageAlt: 'Motivation Chrome Extension by Sami Hindi',
      repo: 'fujiwarachoki/motivate.',
      url: 'https://github.com/FujiwaraChoki/motivate.',
      color: '#23393D',
    },
    {
      id: 2,
      name: 'AutoReach',
      area: 'Email Outreach Website',
      image:
        'https://github.com/FujiwaraChoki/AutoReach/raw/master/assets/image.png',
      imageAlt: 'AutoReach by Sami Hindi',
      repo: 'fujiwarachoki/autoreach',
      url: 'https://auto-reach.vercel.app',
      color: '#23393D',
    },
    {
      id: 3,
      name: 'AutoTest.ai',
      area: 'AI Exam Platform',
      image: 'https://i.imgur.com/csKkYBM.png',
      imageAlt: 'AutoTest.ai by Sami Hindi',
      repo: 'fujiwarachoki/autotest.ai',
      url: 'https://autotest-seven.vercel.app',
      color: '#292E36',
    },
  ]

  const projects: Sideproject[] = []

  for await (const project of sideProjects) {
    if (project.repo) {
      const data = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      })
      const { stargazers_count: stars } = (await data.json()) as unknown as {
        stargazers_count: number
      }

      projects.push({
        ...project,
        stars,
      })
    } else {
      projects.push(project)
    }
  }

  return {
    projects,
  }
}

export default function Sideprojects() {
  const { projects } = useLoaderData<LoaderData>()

  return (
    <main className='container py-40'>
      <motion.article
        variants={{
          hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
          visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
      >
        <AnimatePresence>
          <AnimatedLetters
            key='title'
            as='h1'
            text='Side Projects'
            className='text-4xl font-medium lg:text-5xl'
            textVariants={{
              hidden: { transition: { staggerChildren: 0.015 } },
              visible: { transition: { staggerChildren: 0.015 } },
            }}
            letterVariants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
              },
            }}
          />
          <AnimatedText
            key='text'
            as='p'
            className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:w-3/5'
            text='This is where I keep my side projects. You will find stuff like web and mobile apps, automation projects and Neovim plugins.'
          />
        </AnimatePresence>
      </motion.article>

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative grid flex-1 grid-cols-12 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 mt-16'
      >
        {projects.map(project => (
          <SideProjectItem key={project.id} project={project} />
        ))}
      </motion.section>
    </main>
  )
}

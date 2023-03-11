import type { Project } from '../../projects'
// Import tag icon from react icons
import { FaTag, FaGithub, FaPlay } from 'react-icons/fa'

type ProjectHeaderProps = {
  project: Project
}

export const ProjectHeaderMDX = ({ project }: ProjectHeaderProps) => (
  <header className='flex-col-reverse flex lg:flex-row container mt-40 lg:items-center mb-20'>
    <section className='w-full lg:w-1/2 z-10 break-words'>
      <h2 className='text-4xl font-medium !leading-tight md:text-5xl lg:text-6xl'>
        {project.name}
      </h2>
      <br />
      <div className='mb-6 text-xl font-light leading-relaxed text-dark-400 dark:text-dark-200'>
        {project.description}
      </div>
      <h4 className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'>
        <FaTag className='inline-block mr-2' />
        {project.area}
      </h4>

      <div className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'>
        <FaGithub className='inline-block mr-2' />
        <a href={project.code} target='_blank' rel='noreferrer'>
          Code
        </a>{' '}
        <span className='mx-2'>|</span>
        <FaPlay className='inline-block mx-2' />
        <a href={project.demo} target='_blank' rel='noreferrer'>
          Demo / Release
        </a>
      </div>
    </section>

    <figure className='h-full w-full mb-8 lg:mt-0 lg:w-1/2 aspect-[4/3]'>
      <img src={project.image} alt={project.imageAlt} className='w-full h-full object-cover' />
    </figure>
  </header>
)

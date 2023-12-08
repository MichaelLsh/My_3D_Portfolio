import React from 'react'
import { projects, socialLinks } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Projects
        </span>{" "}
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've embarked on numerous projects throughout the years,
            but these are the ones I hold closest to my heart. Many of 
            them are open-source, so if you come across something that piques
            your interests, always feel free to explore the codebase and contribute 
            your ideas for further enhancements.
            Your collaboration is highly valued!
          </p>
        </div>

        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'> 
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                <div className='btn-front rounded-xl flex justify-center 
                items-center'> 
                  <a href={project.link} target='_blank'>
                    <img 
                      src={project.iconUrl}
                      alt='Project Icon'
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </a>
                </div>
              </div>

              <div className='mt-5 flex flex-col'> 
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>

                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>

              <div className='mt-5 flex items-center gap-2 
              font-poppins'> 
                <Link 
                    to={project.weblink} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className='w-4 h-4 object-contain'
                  />
              </div>

              </div>
            </div>
          ))}
        </div>

        <hr className='border-slate-200'/>

        <CTA />

        <hr className='mt-10 border-slate-200' />

        <div className='mt-10'>
          {socialLinks.map((socialLink) => (
              <a
                href={socialLink.link}
                target='_blank'
              >
                <img
                  src={socialLink.iconUrl}
                  alt={socialLink.name}
                  className='flex flex-col w-12 h-12 object-contain mt-5 object-center justify-center'
                />
              </a>
          ))}
        </div>
      </section>
  )
}

export default Projects
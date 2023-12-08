import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences, socialLinks } from '../constants';
import { redirect } from 'react-router-dom';
import CTA from '../components/CTA';
import { linkedin } from '../assets/icons';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
      Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Shihao
        </span>{" "}
        👋
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Problem-Solving Software Developer based in Canada. Specializing in scalable
            and well-documented software solutions for debugging, optimization, and feature implementations for large-scale
            commercial projects. Experienced in software, web, and mobile application development across each stage of Software
            Development Life Cycle.
          </p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>
            My Skills
          </h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'> 
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex 
                justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-16'>
            <h3 className='subhead-text'>
              Work Experience
            </h3>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            Embarking on a professional journey, I've honed my skills in diverse company landscapes and teamed up with brilliant minds.
              Here's the rundown:
            </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className='flex justify-center items-center
                    w-full h-full'>
                      <a href={experience.weblink} target="_blank">
                      <img 
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[100%] h-[100%] object-contain'
                      />
                      </a>
                    </div>
                  }
                  // iconOnClick={redirect(experience.weblink)}
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins
                    font-semibold'>
                      {experience.title}
                    </h3>

                    <p className='text-black-500 font-medium font-base'
                      style={{margin:0}}>
                      {experience.company_name}
                    </p>

                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1
                        text-sm'>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className='border-slate-200' />

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

export default About
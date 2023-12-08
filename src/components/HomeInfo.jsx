import React from 'react'
import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
    )

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5 '>
            Hi, I am <span className='font-semibold'>Shihao</span>👋
            <br />
            A Junior Software Developer in Canada 🍁
        </h1>
    ),
    2: (
        <InfoBox 
            text="Gained a rich tapestry of 3-year-plus experience spanning reputable firms in Canada and China and meticulously honed my skills"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Dedicated substantial time to leading many projects to success. 
            These ventures not only underscore my commitment to continuous improvement but also demonstrate my ability to independently conceptualize and execute innovative solutions."
            link="/projects"
            btnText="Check out my projects"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or loo for a dev? 
            I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's chat"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
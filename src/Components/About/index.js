import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index"
import { useEffect, useState } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='conatiner about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />
                </h1>
                <span className='bottom-h1-tag'>&lt;/h1&gt;</span>
                <span className='top-p-tag'>&lt;p&gt;</span>
                <p>
                    I am a full-stack developer with a passion for building
                    beautiful and functional user interfaces. I have a
                    particular interest in front-end development, but I am
                    always looking for new challenges and opportunities to grow
                    as a developer.
                </p>
                <p>
                    Motivated MERN-Stack developer, cooperative, highly driven team player and is driven to keep learning and improving.
My goal is to continuously push myself and broaden my skillset through innovative projects. Interested in AI, data
warehousing and eager to contribute to innovative projects in the tech industry. 
                </p>
                <p>
                    When I'm not coding, you can find me playing video games or
                    hanging out with friends and family. I also love to travel
                    and explore new places.
                </p>
                <p>
                    Thank you for visiting my website, and I hope you enjoy
                    your stay!
                </p>
                <span className='bottom-p-tag'>&lt;/p&gt;</span>
            </div>
        </div>
    )
}

export default About;
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Starfield from 'react-starfield'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
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

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#61DAFB'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#1572B6'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#F7DF1E'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#F05032'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color='#000000'/>
                        </div>
                    </div>
                </div>
            </div>
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />
            <Loader type='pacman'/>
        </>
    )
}

export default About;
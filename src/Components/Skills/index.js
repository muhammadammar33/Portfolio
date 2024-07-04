/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJsSquare, faGithub, faGitAlt, faNodeJs, faBootstrap} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container skills-page'>
                <div class="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15} 
                        />
                    </h1>
                    <span className='bottom-h1-tag'>&lt;/h1&gt;</span>
                    <p>
                        Expert in front-end development including technologies like 
                        <span class="tech-tag">HTML5</span>, 
                        <span class="tech-tag">CSS3</span>, 
                        <span class="tech-tag">JavaScript</span>, 
                        <span class="tech-tag">jQuery</span>, 
                        <span class="tech-tag">React</span>, 
                        <span class="tech-tag">NodeJs</span>, 
                        <span class="tech-tag">SQL</span>, 
                        <span class="tech-tag">MongoDB</span>, 
                        <span class="tech-tag">Bootstrap</span>, 
                        <span class="tech-tag">Sass</span>, 
                        <span class="tech-tag">Git</span>, etc.
                    </p>
                    <p>
                        I’m not a designer but I have a good sense of aesthetics, and
                        experience in responsive web design. I put special
                        effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after
                        the project's completion. I guarantee a commitment during work on
                        your project.
                    </p>
                    <p>
                        Visit my 
                        <a target='_blank' className='link' rel='noreferrer' href='https://www.linkedin.com/in/muhammad-ammar-cheema/'>
                        LinkedIn </a> profile for more details. Also you can checkout my cv on this
                        <a target='_blank' className='link' rel='noreferrer' href='#'>
                        link </a>, or feel free to give a peek on some of my
                        <a target='_blank' className='link' rel='noreferrer' href='#'>
                        Work</a>.
                    </p>
                </div>

                <div className="stage-sphere-cont">
                    <div className="spherespinner">
                        <div className="face face1"><FontAwesomeIcon icon={faReact} color="#61DAFB"/></div>
                        <div className="face face2"><FontAwesomeIcon icon={faHtml5} color="#F06529"/></div>
                        <div className="face face3"><FontAwesomeIcon icon={faCss3} color="#1572B6"/></div>
                        <div className="face face4"><FontAwesomeIcon icon={faJsSquare} color="#F7DF1E"/></div>
                        <div className="face face5"><FontAwesomeIcon icon={faGitAlt} color="#F05032"/></div>
                        <div className="face face6"><FontAwesomeIcon icon={faGithub} color="#000000"/></div>
                        <div className="face face7"><FontAwesomeIcon icon={faNodeJs} color="#339933"/></div>
                        <div className="face face8"><FontAwesomeIcon icon={faBootstrap} color="#7952B3"/></div>
                        <div className="face face9"><FontAwesomeIcon icon={faDatabase} color="#00758F"/></div>
                        <div className="face face10"><FontAwesomeIcon icon={faLeaf} color="green"/></div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Skills
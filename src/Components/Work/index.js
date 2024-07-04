import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'

const projects = [
    {
        title: 'Project One',
        description: 'Description for project one.',
        image: '/path/to/image1.png'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: '/path/to/image2.png'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: '/path/to/image2.png'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: '/path/to/image2.png'
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: '/path/to/image2.png'
    },
    // Add more projects here
];

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container works-page'>
                <div className='work-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
                            idx={15} 
                        />
                    </h1>
                    <span className='bottom-h1-tag'>&lt;/h1&gt;</span>
                    <div className='projects'>
                        {projects.map((project, index) => (
                            <div key={index} className='project'>
                                <img src={project.image} alt={project.title} />
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work

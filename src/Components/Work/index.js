import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import Starfield from 'react-starfield'
import Loader from 'react-loaders'
import DA from '../../assets/images/DA.jpeg'
import Apple from '../../assets/images/Apple.png'
import Cal from '../../assets/images/cal.png'

const projects = [
    {
        title: 'Desktop Assistant',
        description: 'Welcome to the future of laziness and automation! Built a desktop AI assistant that can open websites, play music, and chat like a pro using OpenAI, Weather Map, and News APIs! It\'s like having a digital butler that saves our chats in a special folder.',
        image: DA,
        link: 'https://github.com/muhammadammar33/Desktop-Assistant'
    },
    {
        title: 'Apple Website Clone',
        description: 'I\'m thrilled to announce my Apple Clone website! It features a responsive design, detailed product high-res images, and showcases the latest Apple products. Proud of the clean design and user-friendly interface.',
        image: Apple,
        link: 'https://ammar-apple-clone.netlify.app/'
    },
    {
        title: 'Web Calculator',
        description: 'My Simple Web Calculator! Built with HTML, CSS, and JavaScript, it supports basic arithmetic, decimals, and has a clear button for easy resets. With robust error handling and a responsive design, it simplifies your calculations on any device. ',
        image: Cal,
        link: 'https://muhammadammar33.github.io/Calculator/'
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
                                <a href={project.link} target='_blank' rel="noreferrer">
                                    <h2>{project.title}</h2>
                                </a>
                                <p>{project.description}</p>
                            </div>
                        ))}
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

export default Work

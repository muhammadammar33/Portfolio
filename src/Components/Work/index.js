import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import Starfield from 'react-starfield'
import Loader from 'react-loaders'
import DA from '../../assets/images/DA.jpeg'
import Apple from '../../assets/images/Apple.png'
import Cal from '../../assets/images/cal.png'
import Expense from '../../assets/images/Expense.png'
import WA from '../../assets/images/WA.png'
import QG from '../../assets/images/QG.png'
import CC from '../../assets/images/CC.jpeg'
import PP from '../../assets/images/PP.jpg'

const projects = [
    {
        title: 'Persperctive Pulse',
        description: 'Perspective Pulse dive into the mysterious world of news and cryptocurrencies. Ever wondered which coins are hot and which ones are not? Our top 10 crypto list will keep you in the loop, whether you’re a seasoned crypto-guy or just crypto-curious. From Bitcoin to whatever-the-coin-of-the-week is, Perspective Pulse got the lowdown. Think of it as a cheat sheet for your digital treasure hunt.',
        image: PP,
        link: 'https://perspectivepulse.onrender.com/'
    },
    {
        title: 'Cruise Crafters',
        description: 'CruiseCrafters: PHP Laravel powers our sleek car rental site. CSS/HTML5 for design, PhpMyAdmin manages data. Streamlined booking ensuring top user experience.',
        image: CC,
        link: 'https://github.com/muhammadammar33/CruiseCrafters'
    },
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
        title: 'Expense Tracker',
        description: 'My Expense Tracker web app! Easily record expenses in PKR, view your spending history, and keep track of total expenses. Edit or delete as needed. Manage your finances like a pro and make budgeting a breeze!',
        image: Expense,
        link: 'https://muhammadammar33.github.io/Expense-Tracker/'
    },
    {
        title: 'Weather Web App',
        description: 'My Weather App! Get real-time weather updates for any city worldwide with a user-friendly design, interactive icons, and detailed insights on temperature, humidity, and wind speed. Perfect for planning your day or just satisfying your weather curiosity.',
        image: WA,
        link: 'https://muhammadammar33.github.io/Weather-Web/'
    },
    {
        title: 'Quiz Game',
        description: 'Ultimate Quiz Challenge! Test your knowledge with our dynamic Quiz Application! Features include randomized tech questions, a timer, score tracking, immediate feedback, and restart functionality. Accessible on any device, it\'s perfect for everyone!',
        image: QG,
        link: 'https://muhammadammar33.github.io/Web-Quiz-Game/'
    },
    {
        title: 'Web Calculator',
        description: 'My Simple Web Calculator! Built with HTML, CSS, and JavaScript, it supports basic arithmetic, decimals, and has a clear button for easy resets. With robust error handling and a responsive design, it simplifies your calculations on any device. ',
        image: Cal,
        link: 'https://muhammadammar33.github.io/Calculator/'
    },
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

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import nameM from "../../assets/images/name-m.png"
import nameA from "../../assets/images/name-a.png"
import nameC from "../../assets/images/name-c.png"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters/index"
import Logo from "./Logo/index"
import Loader from 'react-loaders'
import Starfield from 'react-starfield'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const firstArray = ['u', 'h', 'a', 'm', 'm', 'a', 'd']
    const middleArray = ['m', 'm', 'a', 'r']
    const lastArray = ['h', 'e', 'e', 'm', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img className="m-img" src={nameM} alt="M" />
                        <AnimatedLetters letterClass={letterClass} strArray={firstArray} idx={15} />
                        <img className="a-img" src={nameA} alt="A" />
                        <AnimatedLetters letterClass={letterClass} strArray={middleArray} idx={25} />
                        <img className="c-img" src={nameC} alt="C" />
                        <AnimatedLetters letterClass={letterClass} strArray={lastArray} idx={35} />
                        <br/>
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={45} />
                    </h1>
                    <span className='bottom-h1-tag'>&lt;/h1&gt;</span>
                    <h2>Full Stack Developer</h2>
                    <span className='bottom-p-tag'>&lt;/p&gt;</span>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    <Link to="/contact" className="flat-button">MY RESUME</Link>
                </div>
                <Logo />
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

export default Home;
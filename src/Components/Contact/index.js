import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useEffect, useState, useRef } from 'react';
import Starfield from 'react-starfield';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const refForm = useRef();

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_sptreka', 'template_c7eabhe', refForm.current, {
            publicKey: 'kVwejCuCh92YV6i0H',
        })
        .then(
            () => {
                alert('Message sent successfully!');
                window.location.reload(false);
            },
            (error) => {
                alert('Message failed to send. Please try again later.');
            },
        );
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                            idx={15} 
                        />
                    </h1>
                    <span className='bottom-h1-tag'>&lt;/h1&gt;</span>
                    <p>
                        I am interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='msg' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Muhammad Ammar Cheema
                    <br />
                    Pakistan
                    <br />
                    Hostel City, Islamabad
                    <span>muhammadammar7747@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.6573, 73.1569]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.6573, 73.1569]}>
                            <Popup>Ammar stays here, come over for a cup of chaye 😊</Popup>
                        </Marker>
                    </MapContainer>
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
    );
};

export default Contact;
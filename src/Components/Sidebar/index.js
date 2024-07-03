import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoM from '../../assets/images/logo-m.png'
import logoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to="/" onclink={() => setShowNav(false)}>
                    <img src={logoM} alt='logo'/>
                    <img className='sub-logo' src={logoSub} alt='logo'/>
                </Link>
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink exact="true" to="/" activeClassName="active" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact="true" to="/about" className='about-link' activeClassName="active" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact="true" to="/contact" className='contact-link' activeClassName="active" onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                    <FontAwesomeIcon 
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color="#ff0000"
                        size="3x"
                        className='close-icon' 
                    />
                </nav>
                <ul className={showNav ? 'mobile-show' : ''}>
                    <li>
                        <a target='_blank' className='linkedin' rel='noreferrer' href='https://www.linkedin.com/in/muhammad-ammar-cheema/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='anchor-icon'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' className='github' rel='noreferrer' href='https://github.com/muhammadammar33'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='anchor-icon'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' className='whatsapp' rel='noreferrer' href='https://api.whatsapp.com/send?phone=923267744260'>
                            <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' className='anchor-icon'/>
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(true)}
                    icon={faBars}
                    color="#ff0000"
                    size="3x"
                    className='hamburger-icon' 
                />
            </div>
        </>
    )
}

export default Sidebar
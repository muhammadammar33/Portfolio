import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoM from '../../assets/images/logo-m.png'
import logoSub from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className='nav-bar'>
                <Link className='logo' to="/">
                    <img src={logoM} alt='logo'/>
                    <img className='sub-logo' src={logoSub} alt='logo'/>
                </Link>
                <nav>
                    <NavLink exact="true" to="/" activeClassName="active">
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact="true" to="/about" className='about-link' activeClassName="active">
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                    </NavLink>
                    <NavLink exact="true" to="/contact" className='contact-link' activeClassName="active">
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' className='linkedin' rel='noreferrer' href='https://www.linkedin.com/in/muhammad-ammar-cheema/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' className='github' rel='noreferrer' href='https://github.com/muhammadammar33'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' className='whatsapp' rel='noreferrer' href='https://api.whatsapp.com/send?phone=923267744260'>
                            <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
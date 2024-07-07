import './index.scss'
import logoM from '../../assets/images/logo-m.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='logo'>
                    <h3><img src={logoM} alt='logo'/>Developed by <span className='foot'>Muhammad Ammar Cheema</span></h3>
                </div>
            </div>
        </>
    )
}

export default Footer
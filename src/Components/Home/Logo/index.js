import './index.scss'
import LogoPic from '../../../assets/images/logo-pic.png'
import { useRef } from 'react'

const Logo = () => {

    const bgRef = useRef()
    // const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoPic} alt='Pic' />
        </div>
    )
}

export default Logo
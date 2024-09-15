import profile from '../../assets/profile.jpeg'
import { useTheme } from '../../context/theme-context'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import  './styles.css'

export function Hero() {
    const { theme, themeIcon } = useTheme()

    const iconColor = theme == 'light' ? 'black' : 'white'

    return (
        <section id='hero' className='container'>
            <div className='colorModeContainer'>
                <img src={profile} className='hero'/>
                {themeIcon()}
            </div>
            <div className='info'>
                <h1>Lucas <br/> Magaldi</h1>
                <h2>Software Developer</h2>

                <span>
                    <a href=""><FaGithub size={30} color={iconColor}/></a>
                    <a href=""><FaLinkedin size={30} color={iconColor}/></a>
                </span>
                <p className='description'>
                    Software Developer is my passion. My duty is give the best of me to help others to achive the best in the tech world.
                </p>
            </div>
        </section>
    )
}
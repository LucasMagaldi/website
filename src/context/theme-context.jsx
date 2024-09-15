import { createContext, useContext, useEffect, useState } from "react"

import { FaMoon } from 'react-icons/fa'
import { IoSunny } from 'react-icons/io5'


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }

    const themeIcon = () => {
        switch(theme) {
            case 'light': {
                return <FaMoon size={22} color='#222' className='colorMode'onClick={toggleTheme}/>
            }
            case 'dark': {
                return <IoSunny size={22} color='#e1e1e6' className='colorMode' onClick={toggleTheme}/>
            }
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeIcon }}>
            {children}
        </ThemeContext.Provider>
    )
}
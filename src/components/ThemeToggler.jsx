import React from 'react'
import {HiSun, HiMoon} from 'react-icons/hi'
import { useThemeContext } from '../context/ThemeContext'


const ThemeToggler = () => {
    const {theme, themeToggle} = useThemeContext()
  return (
    <div>
        {theme === 'dark' ? (
            <div onClick={themeToggle} className='flex items-center'>
                <HiSun className=' text-2xl mr-2'  />Light Mode
            </div>
        ): (
            <div onClick={themeToggle} className='flex items-center'>
                <HiMoon className=' text-2xl mr-2'  />Dark Mode
            </div>
        )}
    </div>
  )
}

export default ThemeToggler
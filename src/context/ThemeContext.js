import React, {useState, useEffect, createContext, useContext} from 'react'
// TODO: rem to use useContext in the exporting custom hook

// if someone select a theme, the site should rem that theme when he/she revisits the site
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage){
        const storedprefs = window.localStorage.getItem('color-theme')
        if(typeof storedprefs === 'string'){
            return storedprefs
        }
        const userMedia =window.matchMedia('(prefs-color-scheme: dark)')
        if (userMedia.matches){
            return 'dark'
        }
    }
    return 'light'
}
// }create context

const ThemeContext =  createContext()
const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme) =>{
        const root =window.document.documentElement;
        const isDark = theme === 'dark'

         root.classList.remove(isDark ? 'light' : 'dark')
         root.classList.add(theme)

         localStorage.setItem('color-theme', theme)
    }
    if (initialTheme){
        rawSetTheme(initialTheme)
    }
    // This should run whenever there is a change in theme
    useEffect (() =>{
        rawSetTheme(theme)
    }, [theme])
    // ToggleTheme
    const themeToggle = () =>{
        setTheme(prevTheme => prevTheme === 'dark'? 'light' : 'dark')
        // console.log('clicked')
    }
  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
        {children}
    </ThemeContext.Provider>
  )
}
export const useThemeContext = () =>{
    return useContext(ThemeContext)
} 

export default ThemeProvider


import React, { createContext, useState } from 'react'
import Home from './Home'

export const themecontext = createContext()


export  function ThemeContext() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light' )
    }
    
  return (
    <div>
      <themecontext.Provider value={{theme, toggleTheme}}>
        <Home/>
      </themecontext.Provider>
    </div>
  )
}
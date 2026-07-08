import React, { useContext } from 'react'
import { themecontext } from './ThemeContext'

function Home() {
    const {theme, toggleTheme} = useContext(themecontext)
  return (
    <div className={theme}>
      <h1>Theme Mode {theme} </h1>
      <button onClick={toggleTheme}>Toggle theme</button>

    </div>
  )
}

export default Home

import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const About = () => {
  const {contextTheme} = useThemeContext()    
  return (
    <div>
        <h2>About</h2>    
        <p>Theme {contextTheme}</p>
        <p>Esta es la página Acerca de...</p>    
    </div>
  )
}

export default About
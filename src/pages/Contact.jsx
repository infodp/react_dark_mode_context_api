import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Contact = () => {
  const {contextTheme} = useThemeContext()    
  return (
    <div>
        <h2>Contact</h2>    
        <p>Theme {contextTheme}</p>
        <p>Esta es la página de Contacto.</p>    
    </div>
  )
}

export default Contact
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [contextTheme, setContextTheme] = useState('Light')   
    const values = {contextTheme, setContextTheme}    
    return (        
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)  
    return context
}
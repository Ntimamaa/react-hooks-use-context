import React from "react";
import { useContext } from "react";

const ThemeContext = React.createContext()
function ThemeProvider({children}){

    const [theme, setTheme] = useContext('dark');
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default {ThemeContext,ThemeProvider};
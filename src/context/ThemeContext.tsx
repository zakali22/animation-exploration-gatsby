import * as React from "react"

type ThemeType = 'light' | 'dark'
type ThemeContextType = { 
    theme: ThemeType; 
    updateTheme: (theme: ThemeType) => void
}

const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'light',
    updateTheme: () => {}
})

export const useThemeContext = () => React.useContext(ThemeContext)

export const ThemeProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [theme, setTheme] = React.useState<ThemeType>('light')
    let themeColors = {
        textColor: '#000',
        backgroundColor: '#f1ede7'
    }

    function updateTheme(theme: ThemeType){
        setTheme(theme)

        changeVariables(theme)
    }

    function changeVariables(theme: ThemeType){
        // console.log(mode)
        if(theme === "light"){
            document.documentElement.style.setProperty('--text-color', themeColors['textColor'])
            document.documentElement.style.setProperty('--background-color', themeColors['backgroundColor'])
            document.documentElement.style.setProperty('--color-mode', 'dark')
            // persistTheme(DARK_MODE)
        } else {
            document.documentElement.style.setProperty('--text-color', themeColors['textColor'])
            document.documentElement.style.setProperty('--background-color', themeColors['backgroundColor'])
            document.documentElement.style.setProperty('--color-mode', 'light')
            // persistTheme(LIGHT_MODE)
        }
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
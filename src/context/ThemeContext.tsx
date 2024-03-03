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
 
    React.useEffect(() => {
        if(window.localStorage.getItem('color-mode') === null) return

        setTheme(window.localStorage.getItem('color-mode') as ThemeType)
    }, [])

    function updateTheme(theme: ThemeType){
        setTheme(theme)
        window.localStorage.setItem('color-mode', theme)
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
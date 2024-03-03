import * as React from "react"
import Nav from "./Nav"
import { useThemeContext } from "../../context/ThemeContext"

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    const {theme} = useThemeContext()

    return (
        <div className={`${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
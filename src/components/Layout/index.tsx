import * as React from "react"
import Nav from "./Nav"

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
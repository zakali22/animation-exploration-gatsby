import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import RevealHeader from "../components/Header/RevealHeader"
import { HeadFC } from "gatsby"
import RevealSideNav from "../components/Header/RevealSideNav"
import RevealVideo from "../components/Header/RevealVideo"

const PinnedAnimations = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0)


    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })

    React.useEffect(() => {
        window.history.scrollRestoration = 'manual' // Reset position to the top
    }, [])

    return (
        <header className="reveal-wrapper">
            <RevealSideNav />
            <RevealHeader />
            <RevealVideo />
        </header>
    )
}


export default PinnedAnimations

export const Head: HeadFC = () => (
    <>
        <title>Reveal animations</title>
        <body className="dark-mode" />
    </>
)
import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import RevealHeader from "../components/Reveal/RevealHeader"
import { HeadFC } from "gatsby"
import RevealSideNav from "../components/Reveal/RevealSideNav"
import RevealVideo from "../components/Reveal/RevealVideo"
import RevealPanelGrids from "../components/Reveal/RevealPanelGrids"

const PinnedAnimations = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0)
    const [hoverState, setHoverState] = React.useState<boolean | null>(null)

    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })

    React.useEffect(() => {
        window.history.scrollRestoration = 'manual' // Reset position to the top

        // console.log(currentIdx)
    }, [currentIdx])

    function handlePanelChange(idx: number, hoverState: boolean){
        setCurrentIdx(idx)
        setHoverState(hoverState)
    }

    return (
        <header className="reveal-wrapper">
            <RevealSideNav handlePanelChange={handlePanelChange} />
            <RevealHeader />
            <RevealVideo />
            <RevealPanelGrids currentIdx={currentIdx} hoverState={hoverState} />
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
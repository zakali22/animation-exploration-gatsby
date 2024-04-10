import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import RevealHeader from "../components/Reveal/RevealHeader"
import { HeadFC } from "gatsby"
import RevealSideNav from "../components/Reveal/RevealSideNav"
import RevealVideo from "../components/Reveal/RevealVideo"
import RevealPanelGrids from "../components/Reveal/RevealPanelGrids"

import usePreviousProps from "../hooks/usePreviousProps"

const PinnedAnimations = () => {
    const [currentIdx, setCurrentIdx] = React.useState<number | null>(null)
    const [hoverState, setHoverState] = React.useState<boolean | null>(null)
    const prevCurrentIdx = usePreviousProps(currentIdx)

    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })

    React.useEffect(() => {
        window.history.scrollRestoration = 'manual' // Reset position to the top

        // console.log(currentIdx)
    }, [currentIdx])

    function handlePanelChange(idx: number | null, hoverState: boolean){
        setCurrentIdx(idx)
        setHoverState(hoverState)
    }

    return (
        <header className="reveal-wrapper">
            <RevealSideNav handlePanelChange={handlePanelChange} />
            <RevealHeader />
            <RevealVideo />
            <RevealPanelGrids currentIdx={currentIdx} previousCurrentIdx={prevCurrentIdx} hoverState={hoverState} />
        </header>
    )
}

/** TODO: 
 * Create a grid for each of the links
 * Create multi-directional option for each of the grid items
 * Create scale and brightness animations for each of the grid items
 * Change header text and background on hover
 * Disable on smaller desktop and below (including on touch)
 */


export default PinnedAnimations

export const Head: HeadFC = () => (
    <>
        <title>Reveal animations</title>
        <body className="dark-mode" />
    </>
)
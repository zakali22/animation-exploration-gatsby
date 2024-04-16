import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import RevealHeader from "../components/Reveal/RevealHeader"
import { HeadFC } from "gatsby"
import RevealSideNav from "../components/Reveal/RevealSideNav"
import RevealHeaderImg from "../components/Reveal/RevealHeaderImg"
import RevealPanelGrids from "../components/Reveal/RevealPanelGrids"

import RevealImg1 from "../images/reveal-image.jpeg"
import RevealImg2 from "../images/reveal-image-2.jpeg"
import RevealImg3 from "../images/reveal-image-3.jpeg"
import RevealImg4 from "../images/reveal-image-4.jpeg"
import RevealImg5 from "../images/reveal-image-5.jpeg"

import usePreviousProps from "../hooks/usePreviousProps"

const REVEAL_HEADER_DATA = [
    { text: 'Studio X', img: RevealImg5 },
    { text: 'Learn Teco', img: RevealImg2 },
    { text: 'Cruiser Barometer', img: RevealImg3 },
    { text: 'Pageant', img: RevealImg4 }
]

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

        // console.log(currentIdx !== null ? REVEAL_HEADER_DATA[currentIdx].text : null)
    }, [currentIdx])

    function handlePanelChange(idx: number | null, hoverState: boolean){
        setCurrentIdx(idx)
        setHoverState(hoverState)
    }

    return (
        <React.StrictMode>
            <header className="reveal-wrapper">
                <RevealSideNav handlePanelChange={handlePanelChange} />
                <RevealHeader hoverText={currentIdx !== null ? REVEAL_HEADER_DATA[currentIdx].text : null} />
                <RevealHeaderImg hoverImg={currentIdx !== null ? REVEAL_HEADER_DATA[currentIdx].text : null} />
                <RevealPanelGrids currentIdx={currentIdx} previousCurrentIdx={prevCurrentIdx} hoverState={hoverState} />
            </header>
        </React.StrictMode>
    )
}

/** TODO: 
 * Change header text and background on hover
 * Optimise images and components
 * Disable on smaller desktop and below (including on touch)
 */


export default PinnedAnimations

export const Head: HeadFC = () => (
    <>
        <title>Reveal animations</title>
        <body className="dark-mode" />
    </>
)
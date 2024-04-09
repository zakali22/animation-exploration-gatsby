import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import RevealHeader from "../components/Reveal/RevealHeader"
import { HeadFC } from "gatsby"
import RevealSideNav from "../components/Reveal/RevealSideNav"
import RevealVideo from "../components/Reveal/RevealVideo"
import RevealPanelGrids from "../components/Reveal/RevealPanelGrids"

const usePreviousProps = (value: number | null) => {
    const ref = React.useRef(value)

    React.useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

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


export default PinnedAnimations

export const Head: HeadFC = () => (
    <>
        <title>Reveal animations</title>
        <body className="dark-mode" />
    </>
)
import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import PinnedPanels from "../components/PinnedPanels";
import PinnedHeader from "../components/Header/PinnedHeader";

const PinnedAnimations = () => {

    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })

    React.useEffect(() => {
        window.history.scrollRestoration = 'manual' // Reset position to the top
    }, [])

    return (
        <>
            <PinnedHeader />
            <PinnedPanels />

        </>
    )
}


export default PinnedAnimations
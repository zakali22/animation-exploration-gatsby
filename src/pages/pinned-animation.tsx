import * as React from "react"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import PinnedPanels from "../components/PinnedPanels";
import PinnedHeader from "../components/Header/PinnedHeader";

const PinnedAnimations = () => {

    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })

    return (
        <>
            <PinnedHeader />

            <section className="container" >
            
            </section>

            <PinnedPanels />

            <section className="title title--center container">
                <h2 className="slideIn">Pinned animation</h2>
            </section>

        </>
    )
}


export default PinnedAnimations
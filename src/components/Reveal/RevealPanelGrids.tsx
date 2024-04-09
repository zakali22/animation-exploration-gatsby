import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import RevealPanelGrid from "./RevealPanelGrid"

import RevealImg1 from "../../images/reveal-image.jpeg"
import RevealImg2 from "../../images/reveal-image-2.jpeg"
import RevealImg3 from "../../images/reveal-image-3.jpeg"
import RevealImg4 from "../../images/reveal-image-4.jpeg"
import RevealImg5 from "../../images/reveal-image-5.jpeg"

type RevealPanelsProp = {
    currentIdx: number | null, 
    previousCurrentIdx: number | null,
    hoverState: boolean | null
}



export default function RevealPanelGrids({ currentIdx, previousCurrentIdx, hoverState }: RevealPanelsProp){
    const containerRef = React.useRef<HTMLDivElement>(null)
    const tl0 = gsap.timeline({ paused: true })
    const tl1 = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })

    const timelines = [tl0, tl1, tl2, tl3]

    gsap.registerPlugin(useGSAP)

    
    useGSAP(() => {
        if(containerRef.current){
            const panelImages = containerRef.current.querySelectorAll('.reveal-panel-grid__item')
            const panelGrids = containerRef.current.querySelectorAll('.reveal-panel-grid')

            /** Timeline for Grid 1 */
            tl0.to(panelGrids[0].querySelectorAll('.reveal-panel-grid__item'), { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 })
                
            /** Timeline for Grid 2 */
            tl1.to(panelGrids[1].querySelectorAll('.reveal-panel-grid__item'), { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 })
            

            console.log("previous current index ", previousCurrentIdx)

            if(hoverState !== null){
                if(hoverState){
                    if(previousCurrentIdx !== null){
                        timelines[previousCurrentIdx].reverse(0)
                    }

                    if(currentIdx !== null){
                        timelines[currentIdx].play(0)
                    }
                } else {
                    if(previousCurrentIdx !== null){
                        timelines[previousCurrentIdx].reverse(0)
                    }
                }
            } 
        }

    }, {
        dependencies: [currentIdx, hoverState],
        scope: containerRef,
        revertOnUpdate: true
    })

    return (
        <div className="reveal-panel-grids" ref={containerRef}>
            <RevealPanelGrid type={1} images={[RevealImg1, RevealImg2, RevealImg3, RevealImg4]}/>
            <RevealPanelGrid type={2} images={[RevealImg2, RevealImg4, RevealImg1, RevealImg3]}/>
        </div>
    )
}
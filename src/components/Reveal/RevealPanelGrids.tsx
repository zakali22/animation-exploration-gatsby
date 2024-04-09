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
    currentIdx: number, 
    hoverState: boolean | null
}

const usePreviousProps = (value: number) => {
    const ref = React.useRef(value)

    React.useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export default function RevealPanelGrids({ currentIdx, hoverState }: RevealPanelsProp){
    const containerRef = React.useRef<HTMLDivElement>(null)
    const tl0 = gsap.timeline({ paused: true })
    const tl1 = gsap.timeline({ paused: true })
    const tl2 = gsap.timeline({ paused: true })
    const tl3 = gsap.timeline({ paused: true })

    const timelines = [tl0, tl1, tl2, tl3]

    gsap.registerPlugin(useGSAP)


    const prevCurrentIdx = usePreviousProps(currentIdx)
    
    useGSAP(() => {
        if(containerRef.current){
            const panelImages = containerRef.current.querySelectorAll('.reveal-panel-grid__item')
            const panelGrids = containerRef.current.querySelectorAll('.reveal-panel-grid')

            /** Timeline for Grid 1 */
            tl0.to(panelGrids[0].querySelectorAll('.reveal-panel-grid__item'), { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 })
                
            /** Timeline for Grid 2 */
            tl1.to(panelGrids[1].querySelectorAll('.reveal-panel-grid__item'), { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1 })
            

            console.log("previous current index ", prevCurrentIdx)

            if(hoverState !== null){
                if(hoverState){
                    timelines[prevCurrentIdx].reverse(0)
                    timelines[currentIdx].play(0)
                } else {
                    timelines[currentIdx].reverse(0)
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
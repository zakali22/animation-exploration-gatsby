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

const GRID_NUM = 4

export default function RevealPanelGrids({ currentIdx, previousCurrentIdx, hoverState }: RevealPanelsProp){
    const containerRef = React.useRef<HTMLDivElement>(null)
    const timelines: gsap.core.Timeline[] = []

    gsap.registerPlugin(useGSAP)

    
    useGSAP(() => {
        if(containerRef.current){
            const panelImages = containerRef.current.querySelectorAll('.reveal-panel-grid__item')
            const panelGrids = containerRef.current.querySelectorAll('.reveal-panel-grid')

            /** Timeline for Grids */
            const grid1 = panelGrids[0].querySelectorAll('.reveal-panel-grid__item');
            Array.from({length: GRID_NUM}, (v, gridNumber) => {
                const gridElements = panelGrids[gridNumber].querySelectorAll('.reveal-panel-grid__item');
                const gridImages = panelGrids[gridNumber].querySelectorAll('.reveal-panel-grid__image img')
                createTimeline(gridElements, gridImages)
            })

            if(hoverState !== null){
                if(hoverState){
                    if(previousCurrentIdx !== null){
                        timelines[previousCurrentIdx].timeScale(2).reverse(2)
                    }

                    if(currentIdx !== null){
                        timelines[currentIdx].timeScale(1.3).play(0)
                    }
                } else {
                    if(previousCurrentIdx !== null){
                        timelines[previousCurrentIdx].timeScale(2).reverse(2)
                    }
                }
            } 


            function createTimeline(elements: NodeListOf<Element>, elementImages: NodeListOf<Element>){
                const tl = gsap.timeline({ paused: true })
                tl
                    .to(elements, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.07, duration: 0.7, ease: "power4.inOut" }, 0)
                    .to(elements, { x: 0, y: 0, duration: 1, stagger: 0.05, ease: "power4.out" }, 0.1)
                    .to(elementImages, { scale: 1, duration: 0.5, ease: "power2.out" }, 0.2)
                    .to(elementImages, { filter: "brightness(1)", duration: 0.5 }, 0.6)

                timelines.push(tl)
                return tl
            }
        }

    }, {
        dependencies: [currentIdx, hoverState],
        scope: containerRef,
        revertOnUpdate: true
    })

    return (
        <div className="reveal-panel-grids" ref={containerRef}>
            <RevealPanelGrid 
                type={1} 
                imageMatrices={[
                    { img: RevealImg1, dir: 'top'},
                    { img: RevealImg2, dir: 'right'},
                    { img: RevealImg3, dir: 'right' },
                    { img: RevealImg4, dir: 'bottom' }
            ]}/>
            <RevealPanelGrid 
                type={2} 
                imageMatrices={[
                    { img: RevealImg2, dir: 'left'},
                    { img: RevealImg4, dir: 'top' },
                    { img: RevealImg1, dir: 'bottom' }
            ]}/>
            <RevealPanelGrid 
                type={1} 
                imageMatrices={[
                    { img: RevealImg2, dir: 'left'},
                    { img: RevealImg4, dir: 'top' },
                    { img: RevealImg1, dir: 'bottom' }
            ]}/>
            <RevealPanelGrid 
                type={2} 
                imageMatrices={[
                    { img: RevealImg2, dir: 'left'},
                    { img: RevealImg4, dir: 'top' },
                    { img: RevealImg1, dir: 'bottom' }, 
                    { img: RevealImg3, dir: 'right' }
            ]}/>
        </div>
    )
}
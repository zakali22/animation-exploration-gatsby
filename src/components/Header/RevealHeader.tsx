import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { TextPlugin } from "gsap/TextPlugin"
import SplitType, { TargetElement } from "split-type"

export default function SlideinHeader(){
    const containerRef = React.useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP, TextPlugin)

    useGSAP(() => {
        const headerTitle = containerRef.current
        const splitHeaderTitle = new SplitType((headerTitle?.querySelector('.reveal-header__content') as TargetElement), { types: 'chars' })
        const chars = splitHeaderTitle.chars

        if(headerTitle){

    
            const tl = gsap.timeline({
                delay: 1.5
            })
            tl
                .fromTo(chars, {
                    y: 100, 
                    opacity: 0
                }, {
                    y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out"
                })
    
    
            console.log(gsap.utils.toArray(headerTitle.textContent))
        }
    }, {
        scope: containerRef
    })

    return (
        <div className="reveal-header" ref={containerRef}>
            <div className="reveal-header__content">
                <h1>Reveal animations</h1>
            </div>
        </div>
    )
}
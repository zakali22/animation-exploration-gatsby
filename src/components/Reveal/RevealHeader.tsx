import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { TextPlugin } from "gsap/TextPlugin"
import SplitType, { TargetElement } from "split-type"

type RevealHeaderProps = {
    hoverText: string | null
}

export default function RevealHeader({ hoverText }: RevealHeaderProps){
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [hasLoaded, setHasLoaded] = React.useState(false)

    gsap.registerPlugin(useGSAP, TextPlugin)

    // console.log(hoverText)

    useGSAP(() => {
        const headerTitle = containerRef.current
        const splitHeaderTitle = new SplitType(headerTitle as TargetElement, { types: 'chars' })
        const chars = splitHeaderTitle.chars

        if(headerTitle){
            
            if(hoverText){
                headerTitle.textContent = hoverText

                const tl = gsap.timeline({  paused: false })
                tl.fromTo(headerTitle, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 1 })

            } else {
                console.log(headerTitle.textContent)
                setHasLoaded(true)

                if(!hasLoaded){
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
                } else {
                    const tl = gsap.timeline({  paused: false })
                    tl.fromTo(headerTitle, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 1 })
                }

            }
        }

        // console.log(gsap.utils.toArray(headerTitle.textContent))
    }, {
        scope: containerRef,
        dependencies: [hoverText]
    })

    return (
        <div className="reveal-header">
            <div className="reveal-header__content">
                <h1 ref={containerRef}>Reveal animations</h1>
            </div>
        </div>
    )
}
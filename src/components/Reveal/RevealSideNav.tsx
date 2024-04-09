import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type RevealSideNavProp = {
    handlePanelChange: (idx: number, hoverState: boolean) => void
}

export default function RevealSideNav({ handlePanelChange }: RevealSideNavProp){
    const containerSideNav = React.useRef<HTMLElement>(null)

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        const navlistItems = containerSideNav.current?.querySelectorAll('ul li div')

        if(navlistItems){
            const tl = gsap.timeline({
                delay: 1.6
            })
            tl
                .fromTo(navlistItems, {
                    yPercent: 100
                }, {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.1,
                    delay: 0.5
                })
        }
    }, {
        scope: containerSideNav
    })


    return (
        <nav className="reveal-nav" ref={containerSideNav}>
            <ul>
                <li onMouseOver={() => handlePanelChange(0, true)} onMouseLeave={() => handlePanelChange(0, false)}><div>Studio X</div></li>
                <li onMouseOver={() => handlePanelChange(1, true)} onMouseLeave={() => handlePanelChange(0, false)}><div>Learn Teco</div></li>
                <li onMouseOver={() => handlePanelChange(2, true)} onMouseLeave={() => handlePanelChange(0, false)}><div>Cruiser Barometer</div></li>
                <li onMouseOver={() => handlePanelChange(3, true)} onMouseLeave={() => handlePanelChange(0, false)}><div>Pageant</div></li>
            </ul>
        </nav>
    )
}
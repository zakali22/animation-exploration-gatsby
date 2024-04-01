import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function RevealSideNav(){
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
                <li><div>Studio X</div></li>
                <li><div>Learn Teco</div></li>
                <li><div>Cruiser Barometer</div></li>
                <li><div>Pageant</div></li>
            </ul>
        </nav>
    )
}
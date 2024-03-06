import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"

const PinnedHeader = () => {
    const container = React.useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => `+=${(window.innerHeight * (coef/100))}`;


    })

    return (
        <section className="pinned-animation-header title container" ref={container}>
            <h1 className="pinned-animation-header__title">
                <span className="pinned-animation-header__top-row">Awesome</span>
                <span className="pinned-animation-header__middle-row">
                    <span>Pinned</span>
                    <span>Animation</span>
                </span>
                <span className="pinned-animation-header__bottom-row">Showcase</span>
            </h1>
        </section>
    )
}

export default PinnedHeader
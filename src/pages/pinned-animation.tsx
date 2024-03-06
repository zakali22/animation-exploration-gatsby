import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import PinnedPanels from "../components/PinnedPanels";

gsap.registerPlugin(ScrollTrigger);
const PinnedAnimations = () => {
    const container = React.useRef<HTMLDivElement>(null)
    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        // console.log(scroll)
    })
    

    useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => `+=${(window.innerHeight * (coef/100))}`;

        const tl = gsap.timeline()
        tl.set('.slideIn', {visibility: "hidden", autoAlpha: 0})
        tl.fromTo('.slideIn', {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1, stagger: 0.3})
        tl.to(container.current, {autoAlpha: 0, duration: 1, scale: 0.5,  scrollTrigger: {
            trigger: container.current, 
            start: "top top", 
            // toggleActions: "play pause resume reset", 
            end: vh(50),
            scrub: 2,
            pin: true, 
            pinSpacing: false,
            markers: true
        }})

    })
    


    return (
        <>
            <section className="title title--center container" ref={container}>
                <h2 className="slideIn">Pinned animation</h2>
                <p className="slideIn">Here's a list of pinned animations inspired by the now defunct Sable Card website</p>
            </section>

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
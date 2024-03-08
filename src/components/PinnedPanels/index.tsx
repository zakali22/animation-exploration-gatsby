import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PanelContentList from "./PanelContentList";
import PanelImageList from "./PanelMediaList";

const PinnedPanels = () => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const panelsContentRef = React.useRef<HTMLDivElement>(null)
    const panelsImagesRef = React.useRef<HTMLDivElement>(null)
    const panelsContentSlidesRef = React.useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => window.innerHeight * (coef / 100);
        const mm = gsap.matchMedia()

        mm.add("(min-width: 1200px)", () => {
            const masterTl = gsap.timeline()
            masterTl
                .add(setupPinning())
        })

        gsap.registerPlugin(ScrollTrigger)

        function setupPinning(){
            if(panelsContentSlidesRef.current && panelsImagesRef.current){
                const contentPanels = Array.from(panelsContentSlidesRef.current.children)
                const imagePanels = Array.from(panelsImagesRef.current.children)

                contentPanels.forEach(slide => {
                    gsap.set(slide, {autoAlpha: 0.4})
                })
        
                imagePanels.forEach((slide, idx) => {
                    if(idx === 0){
                        gsap.set(slide, {autoAlpha: 0.1})
                        return
                    }

                    gsap.set(slide, {autoAlpha: 0})
                })
    
                const duration = 100
                const tl1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: panelsImagesRef.current,
                        start: "top 20%",
                        end: vh(430),
                        scrub: 2
                    }
                })
                tl1.addLabel("showSlide1")
                tl1.to(imagePanels[0], {autoAlpha: 1, duration: 3}, "showSlide1")
                tl1.to(contentPanels[0], {autoAlpha: 1, duration: 2}, "showSlide1")

                tl1.addLabel("hideSlide1")
                tl1.to(imagePanels[0], {autoAlpha: 0, duration: 2}, "hideSlide1")
                tl1.to(contentPanels[0], {autoAlpha: 0.5, duration: 1}, "hideSlide1")

                tl1.addLabel("showSlide2")
                tl1.to(imagePanels[1], {autoAlpha: 1, duration: 3}, "showSlide2")
                tl1.to(contentPanels[1], {autoAlpha: 1, duration: 2}, "showSlide2")

                tl1.addLabel("hideSlide2")
                tl1.to(imagePanels[1], {autoAlpha: 0, duration: 2}, "hideSlide2")
                tl1.to(contentPanels[1], {autoAlpha: 0.5, duration: 1}, "hideSlide2")

                tl1.addLabel("showSlide3")
                tl1.to(imagePanels[2], {autoAlpha: 1, duration: 3}, "showSlide3")
                tl1.to(contentPanels[2], {autoAlpha: 1, duration: 2}, "showSlide3")

                // tl1.addLabel("hideSlide3")
                // tl1.to(imagePanels[2], {autoAlpha: 0, duration: 2}, "hideSlide3")
                // tl1.to(contentPanels[2], {autoAlpha: 0.4, duration: 1}, "hideSlide3")
                
            }
        }
    }, {scope: containerRef})


    return (
        <section className="panels"  ref={containerRef}>
            <div className="panels-content panel" ref={panelsContentRef}>
                <PanelContentList ref={panelsContentSlidesRef} />
            </div>

            <PanelImageList ref={panelsImagesRef} />
        </section>
    )
}

export default PinnedPanels
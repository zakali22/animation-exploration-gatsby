import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PanelContentList from "./PanelContentList";
import PanelImageList from "./PanelMediaList";
import PanelArrows from "./PanelArrows";

const PinnedPanels = () => {
    const [activeSlide, setActiveSlide] = React.useState(0)
    
    const containerRef = React.useRef<HTMLDivElement>(null)
    const panelsContentRef = React.useRef<HTMLDivElement>(null)
    const panelsImagesRef = React.useRef<HTMLDivElement>(null)
    const panelsContentSlidesRef = React.useRef<HTMLDivElement>(null)

    const { contextSafe } = useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => window.innerHeight * (coef / 100);
        const mm = gsap.matchMedia()

        mm.add(
        {
            isXlDesktop: `(min-width: 1400px)`,
            isLgDesktop: "(min-width: 1200px)",
            isMdDesktop: "(min-width: 992px)"
        }, 
        (context) => {
            let conditions = context.conditions
            const masterTl = gsap.timeline()
            masterTl
                .add(setupPinning(conditions))

                return () => {
                    console.log("No animation")
                }
        })

        gsap.registerPlugin(ScrollTrigger)

        function setupPinning(mediaQueryConditions){
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
                        end: () => {
                            if(mediaQueryConditions.isXlDesktop){
                                return vh(430)
                            } else if (mediaQueryConditions.isLgDesktop){
                                return vh(350)
                            } else if(mediaQueryConditions.isMdDesktop) {
                                return vh(300)
                            }
                            return vh(200)
                        },
                        scrub: 2, 
                        invalidateOnRefresh: true
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


    const handleActiveSlide = contextSafe((slide: number) => {
        setActiveSlide(slide)

        const tl = gsap.timeline()
        tl.to([panelsImagesRef.current, panelsContentSlidesRef.current], {
            xPercent: slide === 0 ? 0 : (slide * -100),
            duration: 1, 
            ease: 'power4.inOut', 
            stagger: 0.1
        })
    })


    return (
        <section className="panels"  ref={containerRef}>
            <PanelArrows onClick={handleActiveSlide} currentSlide={activeSlide} />
            <div className="panels-content panel" ref={panelsContentRef}>
                <PanelContentList ref={panelsContentSlidesRef} />
            </div>

            <PanelImageList ref={panelsImagesRef} />
        </section>
    )
}

export default PinnedPanels
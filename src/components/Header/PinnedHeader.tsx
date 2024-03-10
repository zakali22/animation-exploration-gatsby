import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
import heroVideo from "../../images/hero.mp4"

const PinnedHeader = () => {
    const container = React.useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => `+=${(window.innerHeight * (coef/100))}`;
        const mm = gsap.matchMedia()

        mm.add("(min-width: 1200px)", () => {
            const masterTl = gsap.timeline()
            // masterTl.add(videoScaleAnim())
            masterTl
                .add(textRevealAnim())
                .add(fadeOutAnim())
        })

        mm.add("(max-width: 1199px)", () => {
            const masterTl = gsap.timeline()
            masterTl
                .add(stackedLayoutAnim())
        })

        function stackedLayoutAnim(){
            const tl = gsap.timeline()
            
            const ST = ScrollTrigger.create({
                trigger: container.current, 
                start: "top top",
                // toggleActions: "play complete reverse none",
                end: "+=30%",
                // pin: container.current,
                // pinSpacing: true,
                scrub: 1,
                markers: false, 
                animation: tl,
                // onEnter: () => {
                //     const tl_initial = gsap.timeline()
                //     tl_initial
                //         .set(".pinned-animation-video__container", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", overwrite: "auto"})
                //         .to(".pinned-animation-video__container", { clipPath: "polygon(5% 7%, 95% 7%, 95% 93%, 5% 93%)", duration: 2.6, ease: "power3.out", overwrite: "auto"})
                // }
            })

            tl.fromTo(".pinned-animation-video__container", { clipPath: "polygon(5% 7%, 95% 7%, 95% 93%, 5% 93%)"}, { clipPath: "polygon(40% 90%, 63% 84%, 62% 90%, 39% 96%)", duration: 2}, "slideIn")

            return tl
        }

        function textRevealAnim(){
            const tl = gsap.timeline()

            const ST = ScrollTrigger.create({
                trigger: container.current, 
                start: "top top",
                toggleActions: "play complete reverse none",
                end: "+=200%",
                pin: container.current,
                pinSpacing: true,
                scrub: 1,
                markers: false, 
                animation: tl,
                onEnter: () => {
                    const tl_initial = gsap.timeline()
                    tl_initial
                        .set(".pinned-animation-video__container", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", overwrite: "auto"})
                        .to(".pinned-animation-video__container", { clipPath: "polygon(5% 7%, 95% 7%, 95% 93%, 5% 93%)", duration: 2.6, ease: "power3.out", overwrite: "auto"})
                }
            })

            tl.fromTo(".pinned-animation-video__container", { clipPath: "polygon(5% 7%, 95% 7%, 95% 93%, 5% 93%)"}, { clipPath: "polygon(45% 50%, 53% 47%, 53% 51%, 45% 54%)", duration: 2}, "slideIn")
            
            tl.addLabel("slideIn", 0.7)
            tl.from('.pinned-animation-header__top-row', {y: "-100%", autoAlpha: 0, duration: 1}, "slideIn")
            tl.from('.pinned-animation-header__middle-row span:first-child', {x: "-100%", autoAlpha: 0, duration: 1}, "slideIn")
            tl.from('.pinned-animation-header__middle-row span:last-child', {x: "100%", autoAlpha: 0, duration: 1}, "slideIn")
            tl.from('.pinned-animation-header__bottom-row', {y: "100%", autoAlpha: 0, duration: 1}, "slideIn")

        
            return tl
        }

        function fadeOutAnim(){
            const tl0 = gsap.timeline({
                paused: true,
                scrollTrigger: {
                    trigger: container.current, 
                    start: "top top",
                    // toggleActions: "play complete reverse none",
                    end: "+=1000",
                    immediateRender: false,
                    pin: container.current,
                    pinnedContainer: container.current,
                    pinSpacing: true,
                    scrub: 1,
                    markers: false, 
                    invalidateOnRefresh: true,
                    onUpdate: () => {
                        // console.log(tl0?.scrollTrigger?.adjustPinSpacing(1000))
                    }
                }
            })
            tl0.addLabel("fadeOut")
            tl0.to(container.current, {scale: 0.3, autoAlpha: 0, duration: 1}, "fadeOut")

            return tl0
        }
    }, {
        scope: container
    })

    return (
        <div className="wrapper" ref={container}>
            <section className="pinned-animation-video">
                <div className="pinned-animation-video__container">
                    <video src={heroVideo} autoPlay loop muted></video>
                </div>
            </section>

            <section className="pinned-animation-header title container">
                <h1 className="pinned-animation-header__title">
                    <span className="pinned-animation-header__top-row">Awesome</span>
                    <span className="pinned-animation-header__middle-row">
                        <span>Pinned</span>
                        <span>Animation</span>
                    </span>
                    <span className="pinned-animation-header__bottom-row">Showcase</span>
                </h1>
            </section>
        </div>
    )
}

export default PinnedHeader
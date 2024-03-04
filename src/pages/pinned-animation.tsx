import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger);
const PinnedAnimations = () => {
    const container = React.useRef<HTMLDivElement>(null)
    const lenisRef = React.useRef(null)

    useLenis(({ scroll }) => {
        console.log(scroll)
    })
    

    useGSAP(() => {
        // use normal class selectors within the container context
        const vh = (coef: number) => window.innerHeight * (coef/100);

        const tl = gsap.timeline()
        tl.set('.slideIn', {visibility: "hidden", autoAlpha: 0})
        tl.fromTo('.slideIn', {y: 150, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.1, scrollTrigger: {
            trigger: '.slideIn',
            start: "top center",
            pin: container.current,
            end: vh(200),
            scrub: 1,
            markers: true
        }})
    }, {scope: container})
    


    return (
        <ReactLenis ref={(node) => { console.log(node) }} root>
            <section className="title title--center container"  ref={container}>
                <h2 className="slideIn">Pinned animation</h2>
                <p className="slideIn">Here's a list of pinned animations inspired by the now defunct Sable Card website</p>
            </section>

            <section className="panels" data-current-slide="0">
                <div className="panels-arrows">
                    <button className="panels__arrow">
                        <svg viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.66669 15.0661L17.2326 22.1473C17.7452 22.6271 18.5421 22.6271 19.0548 22.1473L19.0968 22.108C19.6593 21.5814 19.6598 20.6891 19.0978 20.162L13.665 15.0661L19.0978 9.97024C19.6598 9.44312 19.6593 8.55079 19.0968 8.02428L19.0548 7.98497C18.5421 7.50516 17.7452 7.50516 17.2326 7.98497L9.66669 15.0661Z" fill="currentColor"></path></svg>
                    </button>
                    <button className="panels__arrow">
                        <svg viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3333 14.9339L12.7674 7.85274C12.2548 7.37293 11.4579 7.37293 10.9452 7.85274L10.9032 7.89205C10.3407 8.41855 10.3402 9.31089 10.9022 9.83801L16.335 14.9339L10.9022 20.0298C10.3402 20.5569 10.3407 21.4492 10.9032 21.9757L10.9452 22.015C11.4579 22.4948 12.2548 22.4948 12.7674 22.015L20.3333 14.9339Z" fill="currentColor"></path></svg>
                    </button>
                </div>
                <div className="panels-content panel">
                    <h2 className="panels-content__title h3">Our culture 02</h2>
                    <div className="panels-content__list">
                        <div className="panels-content__list-item" data-slide="1">
                            <div className="panels-content__list-item__content">
                                <h3>Earn 2% cash back on favorite brands</h3>
                                <p>Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in
                                    your first year! Get premium benefits and much more.</p>
                            </div>
                        </div>
                        <div className="panels-content__list-item" data-slide="2">
                            <div className="panels-content__list-item__content">
                                <h3>Moving to the U.S.? No SSN required</h3>
                                <p>Start building credit before you even enter the country. Sign up with your international address,
                                    passport & visa instead**.</p>
                            </div>
                        </div>
                        <div className="panels-content__list-item" data-slide="3">
                            <div className="panels-content__list-item__content">
                                <h3>Get help from a real person</h3>
                                <p>When you’ve got questions about your finances, get multilingual customer support anytime you need
                                    from direct in-app chat, email, phone, and our site FAQs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panels-images panel">
                    <div className="panels-graphic" data-slide="1">
                        <div className="panels-graphic__wrapper">
                            <video className="hero-video" 
                                poster="https://assets.website-files.com/619778d1f338092c00a38573/61b722a29eb495746821350c_sable-frame.jpg">
                                <source src="https://cdn.sablecard.com/videos/home_hero_cards_compressed.mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="panels-graphic" data-slide="2">
                        <div className="panels-graphic__wrapper">
                            <video className="scrolling-panels__img" 
                                poster="https://assets.website-files.com/619778d1f338092c00a38573/626bd0b31bfe1129e26b70ac_scrolling-panel1.jpg">
                                <source src="https://cdn.sablecard.com/videos/homepage_slider_2.mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="panels-graphic" data-slide="3">
                        <div className="panels-graphic__wrapper">
                            <video className="scrolling-panels__img" 
                                poster="https://assets.website-files.com/619778d1f338092c00a38573/62bdb27c225b4cb2f1001115_app_for-you_3.jpg">
                                <source src="https://cdn.sablecard.com/videos/homepage_slider_3.mp4" />
                            </video>
                        </div>
                    </div>

                </div>
            </section>

            <section className="title title--center container">
                <h2 className="slideIn">Pinned animation</h2>
            </section>

        </ReactLenis>
    )
}


export default PinnedAnimations
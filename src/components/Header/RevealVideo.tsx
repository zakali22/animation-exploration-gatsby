import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import heroImage from "../../images/reveal-image.jpeg"

export default function RevealVideo(){
    const containerRef = React.useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        const svg = containerRef.current
        const svgPath = containerRef.current?.querySelector('path')
        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline({
            repeat: -1, 
            yoyo: true
        })

        if(svgPath){
            tl1.fromTo(svg, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 3, ease: "power4.inOut"})
            tl2
                .to(svgPath, { ease: "sine.in", duration: 5, attr: { d: 'M59.6,-49.1C70.3,-34,67.4,-9.6,60.4,10.9C53.5,31.5,42.4,48.2,25.8,57.7C9.2,67.3,-12.8,69.8,-31.5,62C-50.2,54.3,-65.7,36.4,-71.4,15.2C-77.1,-6,-73.1,-30.5,-59.6,-46.3C-46,-62,-23,-68.9,0.7,-69.5C24.4,-70,48.8,-64.2,59.6,-49.1Z' } })
                .to(svgPath, { ease: "sine.in", duration: 4, attr: { d: 'M38.1,-32.5C42.6,-14.3,34.7,0.6,26.3,18.6C17.9,36.6,8.9,57.7,-7.8,62.2C-24.5,66.7,-49,54.6,-62,33.9C-75,13.3,-76.5,-15.8,-64.2,-38.5C-52,-61.2,-26,-77.3,-4.6,-74.7C16.8,-72,33.7,-50.6,38.1,-32.5Z'} })
                .to(svgPath, { ease: "sine.inOut", duration: 4, attr: { d: 'M28.6,-27.8C32.4,-9.9,27.6,1.7,21.4,16.5C15.3,31.3,7.6,49.3,-9.8,55C-27.3,60.7,-54.6,54,-60.6,39.3C-66.6,24.6,-51.4,1.9,-37.7,-21.7C-24,-45.4,-12,-69.9,0.2,-70C12.4,-70.1,24.7,-45.8,28.6,-27.8Z' } })
                .to(svgPath, { ease: "sine.inOut", duration: 4, attr: { d: 'M37.6,-20C51.4,2.1,66.9,24.8,60.9,43C54.9,61.3,27.5,74.9,-0.5,75.2C-28.5,75.5,-56.9,62.4,-65.9,42.5C-74.9,22.5,-64.3,-4.2,-50.1,-26.6C-35.8,-48.9,-17.9,-66.7,-3,-65C11.9,-63.3,23.9,-42,37.6,-20Z' }})
        }
    }, {
        scope: containerRef
    })

    return (

        <div className="reveal-video" ref={containerRef}>
            <svg width="700px" height="700px" viewBox="0 0 550 550">
                <clipPath id="clipShapeVideo">
                    <path xmlns="http://www.w3.org/2000/svg" d="M49,-39.5C64.5,-19.6,78.8,0.8,75.8,18.6C72.7,36.3,52.4,51.4,30.8,60.5C9.1,69.6,-13.7,72.8,-30.8,64.4C-48,56,-59.4,36.1,-63.1,15.6C-66.7,-4.8,-62.7,-25.8,-50.9,-44.8C-39.1,-63.9,-19.5,-81.1,-1.4,-80C16.7,-78.8,33.5,-59.4,49,-39.5Z" />
                </clipPath>

                <g clipPath="url(#clipShapeVideo)">
                    <image xlinkHref={heroImage} height="500px" width="500px"></image>
                </g>
            </svg>
        </div>
    )
}
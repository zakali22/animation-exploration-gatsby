import * as React from "react"
import gsap from "gsap"
import Magnetic from "../../vendors/magnetic"
import MouseFollower from "mouse-follower"
import arrowUp from "../../images/arrow.svg"

type MouseFollowerType = InstanceType<typeof MouseFollower> | null

MouseFollower.registerGSAP(gsap)
const customCursor = () => {
    let cursor: MouseFollowerType = null
    // console.log("Running the customCursor")
    // console.log(Magnetic)

    React.useEffect(() => { 
        cursor = new MouseFollower({
            el: null, 
            container: document.body, 
            iconSvgSrc: arrowUp
        })

        console.log("Running it")
        initExpandedCursor()
        initMagneticCursor()
    }, [])

    function initMagneticCursor(){
        const magneticEl = document.querySelectorAll('[data-magnetic]')
        // console.log("Running initMagneticCursor")
        // console.log(magneticEl)
        magneticEl.forEach(el => {

            console.log(el)
            new Magnetic(el, {
                s: 0.1,
                rs: 0.2,
                y: 0.1
            })
        })
    }

    function initExpandedCursor(){
        const mediaEl = document.querySelectorAll('[data-cursor-expand]')
        console.log(mediaEl)
        mediaEl.forEach(el => {
            const cursorSize = (el as HTMLElement).dataset.cursorSize ? (el as HTMLElement).dataset.cursorSize : 'sm'
            const arrowCursor = (el as HTMLElement).dataset.arrowCursor

            console.log(cursorSize)

            el.addEventListener('mouseenter', function(){
                console.log("mouseentered")
                if(arrowCursor){
                    cursor?.setIcon('arrow-up')
                }

                cursor?.addState(`-inverse -${cursorSize} -exclusion`);
            })

            el.addEventListener('mouseleave', function(){
                if(arrowCursor){
                    cursor?.removeIcon()
                }
                cursor?.removeState(`-inverse -${cursorSize} -exclusion`);
            })
        })
    }

    return cursor
}

export default customCursor
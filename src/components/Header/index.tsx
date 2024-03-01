import * as React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import HeaderNav from "./HeaderNav"
import HeaderResource from "./HeaderResource"
import CustomCursor from "../Cursor"

const Header = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // use normal class selectors within the container context
    const tl = gsap.timeline()
    tl.to('.header__nav-link a', {rotateX: 0, y: 0, autoAlpha: 1, duration: 1.3, scale: 1, stagger: 0.2, ease: "power1.out"}, 0)
    tl.to('.header__resources-link a', {rotateX: 0, y: 0, autoAlpha: 1, duration: 2, scale: 1, stagger: 0.2, ease: "power1.out"}, "-=1.5")
  }, {scope: container})

  return (
    <header className="header container container-center">
      <div className="header__content" ref={container}>
        <CustomCursor />
        <HeaderNav />
        <HeaderResource />
      </div>
    </header>
  )
}

export default Header
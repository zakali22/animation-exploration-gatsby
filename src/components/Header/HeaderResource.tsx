import * as React from "react"

const HeaderResource = () => {
    return (
        <div className="header__resources">
            <h3 className="p">Useful resources for animations</h3>
            <ul className="header__resources-links">
                <li className="header__resources-link" data-cursor-expand="true" data-magnetic="true"><a href="/">GSAP</a></li>
                <li className="header__resources-link" data-cursor-expand="true" data-magnetic="true"><a href="/">Codrops</a></li>
                <li className="header__resources-link" data-cursor-expand="true" data-magnetic="true"><a href="/">Awwwards</a></li>
                <li className="header__resources-link" data-cursor-expand="true" data-magnetic="true"><a href="/">SuperHi</a></li>
            </ul>
        </div>
    )
}

export default HeaderResource
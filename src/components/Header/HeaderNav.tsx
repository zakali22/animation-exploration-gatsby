import * as React from "react"

const HeaderNav = () => {
    return (
        <div className="header__nav">
            <h2 className="p">Take a look at these animations</h2>
            <ul className="header__nav-links">
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/pinned-animation.html">
                        <span>01</span>
                        <span>pinned animations</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>02</span>
                        <span>timelines</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>03</span>
                        <span>page transitions</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>04</span>
                        <span>reveal animations</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>05</span>
                        <span>text animations</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>06</span>
                        <span>svg distortions</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>07</span>
                        <span>marquee effects</span>
                    </a>
                </li>
                <li className="header__nav-link h3" data-cursor-expand="true" data-cursor-size="lg" data-arrow-cursor="true">
                    <a href="/">
                        <span>08</span>
                        <span>cursor animations</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav
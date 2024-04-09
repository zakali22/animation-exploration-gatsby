import * as React from "react"

type RevealPanelGridProps = {
    type: 1 | 2 | 3 | 4, 
    images: any[]
}

export default function RevealPanelGrid({ type, images }: RevealPanelGridProps) {

    return (
        <div className={`reveal-panel-grid reveal-panel-grid--${type}`}>
            <div className="reveal-panel-grid__item">
                <div className="reveal-panel-grid__image">
                    <img src={images[0]} alt="Reveal image 1" />
                </div>
            </div>
            <div className="reveal-panel-grid__item">
                <div className="reveal-panel-grid__image">
                    <img src={images[1]} alt="Reveal image 2" />
                </div>
            </div>
            <div className="reveal-panel-grid__item">
                <div className="reveal-panel-grid__image">
                    <img src={images[2]} alt="Reveal image 3" />
                </div>
            </div>
            <div className="reveal-panel-grid__item">
                <div className="reveal-panel-grid__image">
                    <img src={images[3]} alt="Reveal image 4" />
                </div>
            </div>
        </div>
    )
}
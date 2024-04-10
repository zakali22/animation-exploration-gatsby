import * as React from "react"

type RevealPanelGridProps = {
    type: 1 | 2 | 3 | 4, 
    imageMatrices: {
        img: string,
        dir: 'top' | 'right' | 'bottom' | 'left'
    }[]
}

export default function RevealPanelGrid({ type, imageMatrices }: RevealPanelGridProps) {

    return (
        <div className={`reveal-panel-grid reveal-panel-grid--${type}`}>
            {imageMatrices.map(({img, dir}, idx) => (
                <div key={idx} className={`reveal-panel-grid__item reveal-panel-grid__item--${dir} `}>
                    <div className="reveal-panel-grid__image">
                        <img src={img} alt="Reveal image 4" />
                    </div>
                </div>
            ))}
        </div>
    )
}
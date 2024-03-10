import * as React from "react"
import PanelMediaListItem from "./PanelMediaListItem"

type Ref = HTMLDivElement

const videosSources = [
    {
        poster: "https://assets.website-files.com/619778d1f338092c00a38573/61b722a29eb495746821350c_sable-frame.jpg",
        source: "https://cdn.sablecard.com/videos/home_hero_cards_compressed.mp4"
    },
    {
        poster: "https://assets.website-files.com/619778d1f338092c00a38573/626bd0b31bfe1129e26b70ac_scrolling-panel1.jpg",
        source: "https://cdn.sablecard.com/videos/homepage_slider_2.mp4"
    }, 
    {
        poster: "https://assets.website-files.com/619778d1f338092c00a38573/62bdb27c225b4cb2f1001115_app_for-you_3.jpg",
        source: "https://cdn.sablecard.com/videos/homepage_slider_3.mp4"
    }
]

const PanelMediaList = React.forwardRef<Ref>((props, ref) => {
    return (
        <div className="panels-images panel" ref={ref}>
            {videosSources.map(({ poster, source }) => (
                <PanelMediaListItem>
                    <video className="scrolling-panels__img" autoPlay muted loop
                        poster={poster}>
                        <source src={source} />
                    </video>
                </PanelMediaListItem>
            ))}
        </div>
    )
})

export default PanelMediaList
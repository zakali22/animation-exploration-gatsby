import * as React from "react"
import PanelContentListItem from "./PanelContentListItem"

type Ref = HTMLDivElement

const contentListData = [
    {
        id: 0,
        title: "Earn 2% cash back on favorite brands",
        desc: "Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more."
    },
    {
        id: 1, 
        title: "Moving to the U.S.? No SSN required",
        desc: "Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**."
    }, 
    {
        id: 2,
        title: "Get help from a real person",
        desc: "When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs."
    }
]

const PanelContentList = React.forwardRef<Ref>((props, ref) => {
    return (
        <div className="panels-content__list" ref={ref}>
            {contentListData.map(({ id, title, desc }) => (
                <PanelContentListItem key={id}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </PanelContentListItem>
            ))}    
        </div>
    )
})

export default PanelContentList
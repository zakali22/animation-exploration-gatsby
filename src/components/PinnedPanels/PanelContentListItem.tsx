import * as React from "react"

const PanelContentListItem = (props: React.PropsWithChildren) => {
    return (
        <div className="panels-content__list-item" >
            <div className="panels-content__list-item__content">
                {props.children}
            </div>
        </div>
    )
}

export default PanelContentListItem
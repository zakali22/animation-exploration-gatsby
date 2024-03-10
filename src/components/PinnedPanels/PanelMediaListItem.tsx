import * as React from "react"

const PanelMediaListItem = (props: React.PropsWithChildren) => {
    return (
        <div className="panels-graphic" >
            <div className="panels-graphic__wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default PanelMediaListItem
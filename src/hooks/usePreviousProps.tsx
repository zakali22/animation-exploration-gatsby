import * as React from "react"

const usePreviousProps = (value: number | null) => {
    const ref = React.useRef(value)

    React.useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export default usePreviousProps
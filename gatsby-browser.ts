import "./src/styles/global.scss"
import "./src/styles/layout.scss"
import "./src/styles/header.scss"
import "./src/styles/nav.scss"
import "./src/styles/custom-cursor.scss"
import "./src/styles/pinned-panels.scss"
import "./src/styles/pinned-header.scss"

export const onRouteUpdate = ({ location, prevLocation }) => {
      // do not restore scroll position on page refresh without hash
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}
// Welcome to Code in Framer
// Get Started: https://www.framer.com/developers/

import Example from "https://framer.com/m/framer/Example.js@^1.0.0"

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Logo(props) {
    // This is a React component containing an Example component
    // - Replace <Example /> with your own code
    // - Find inspiration: https://www.framer.com/developers/

    return (
        <div style={containerStyle}>
            <Example />
        </div>
    )
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}

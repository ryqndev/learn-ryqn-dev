/**
 * Animated scroll suggestion set to bottom of screen. If additional customizing is needed,
 * split top level div styles and export separately
 * 
 * @param {boolean} flipped - if set to true, will invert the dark/light theme
 */
const ScrollableNotice = ({className=""}) => {
    return (
        <div className={`scrollable-notice--wrapper ${className}`}>
            <div className="mouse">
                <div className="wheel"></div>
            </div>
            <div className="icon-arrows">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default ScrollableNotice;

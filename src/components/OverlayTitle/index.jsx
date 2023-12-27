/**
 * Component for displaying an overlay title with a background image.
 *
 * @param {string} title - The title text to be displayed.
 * @param {string} background - The URL of the background image.
 * @returns {JSX.Element} - The rendered overlay title component.
 */
function OverlayTitle({ title, background }) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  }
  return (
    <div className="overlayTitle" style={backgroundStyle}>
      {title}
    </div>
  )
}

export default OverlayTitle

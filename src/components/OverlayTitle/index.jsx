function OverlayTitle({ title, background }) {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  }
  return (
    <div className="overlayTitle" style={backgroundStyle}>
      <h2 className="overlayTitle__h2">{title}</h2>
    </div>
  )
}

export default OverlayTitle

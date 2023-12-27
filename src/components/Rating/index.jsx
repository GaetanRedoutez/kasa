/**
 * Component to display a rating using star images.
 *
 * @param {Array<string>} rating - An array of star image URLs representing the rating.
 * @param {string} className - Additional class name(s) for styling purposes.
 * @returns {JSX.Element} - The rendered rating component.
 */
function Rating({ rating, className }) {
  return (
    <div className={`${className} rating`}>
      {rating.map((star, index) => (
        <img
          key={`${star}-${index}`}
          src={star}
          alt="Rating star"
          className="rating__star"
        />
      ))}
    </div>
  )
}

export default Rating

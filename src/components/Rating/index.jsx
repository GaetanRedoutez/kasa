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

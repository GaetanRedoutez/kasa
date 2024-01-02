import { useState, useEffect } from "react"
import arrowRight from "../../assets/images/arrow-right.svg"
import arrowLeft from "../../assets/images/arrow-left.svg"

/**
 * Component for displaying a carousel of images.
 *
 * @param {Object} selectedRental - The selected rental object containing information about the rental.
 * @param {string} componentClassName - Additional class name(s) for styling purposes.
 * @returns {JSX.Element} - The rendered carousel component.
 */
function Carousel({ selectedRental, componentClassName }) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [arrayImageLength, setArrayImageLength] = useState(1)

  const carouselImage = selectedRental.pictures

  // Function to navigate to the previous image in the carousel
  const prevIndex = () => {
    const actualIndex = carouselIndex
    if (arrayImageLength === 1) return
    setCarouselIndex(actualIndex <= 0 ? arrayImageLength - 1 : actualIndex - 1)
  }

  // Function to navigate to the next image in the carousel
  const nextIndex = () => {
    const actualIndex = carouselIndex
    if (arrayImageLength === 1) return
    setCarouselIndex(actualIndex >= arrayImageLength - 1 ? 0 : actualIndex + 1)
  }

  // Update the image array length when the selected rental or its pictures change
  useEffect(() => {
    setArrayImageLength(carouselImage.length === 1 ? 1 : carouselImage.length)
  }, [carouselImage])

  // Determine the visibility of navigation arrows and counter based on the image array length
  const displayElement = arrayImageLength === 1 ? "hidden" : "visible"

  return (
    <div className={`${componentClassName} slider`}>
      {/* Display the current image in the carousel */}
      <img
        src={carouselImage[carouselIndex]}
        alt={`${selectedRental.title}`}
        className={`${componentClassName}-picture slider__picture`}
      />

      {/* Navigation arrows for moving to the previous or next image */}
      <div
        className={`${componentClassName}-arrow slider__arrow ${displayElement}`}
      >
        <button
          className={`${componentClassName}-arrow-prev slider__arrow-prev`}
          onClick={prevIndex}
        >
          <img
            src={arrowLeft}
            alt="Previous"
            className="slider__arrow-prev-img"
          />
        </button>
        <button
          className={`${componentClassName}-arrow-next slider__arrow-next`}
          onClick={nextIndex}
        >
          <img src={arrowRight} alt="Next" className="slider__arrow-next-img" />
        </button>
      </div>

      {/* Counter displaying the current image index and total images count */}
      <div
        className={`${componentClassName}-counter slider__counter ${displayElement}`}
      >
        {carouselIndex + 1}/{arrayImageLength}
      </div>
    </div>
  )
}

export default Carousel

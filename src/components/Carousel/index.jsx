import { useState, useEffect } from "react"
import leftArrowDesktop from "../../assets/images/leftArrowDesktop.svg"
import rightArrowDesktop from "../../assets/images/rightArrowDesktop.svg"

function Carousel({ selectedRental, componentClassName }) {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [arrayImageLength, setArrayImageLength] = useState(1)

  const carouselImage = selectedRental.pictures

  const prevIndex = () => {
    const actualIndex = carouselIndex
    if (arrayImageLength === 1) return
    setCarouselIndex(actualIndex <= 0 ? arrayImageLength - 1 : actualIndex - 1)
  }

  const nextIndex = () => {
    const actualIndex = carouselIndex
    if (arrayImageLength === 1) return
    setCarouselIndex(actualIndex >= arrayImageLength - 1 ? 0 : actualIndex + 1)
  }

  useEffect(() => {
    setArrayImageLength(carouselImage.length === 1 ? 1 : carouselImage.length)
  }, [carouselImage])

  return (
    <div className={`${componentClassName}`}>
      <img
        src={carouselImage[carouselIndex]}
        alt={`${selectedRental.title}`}
        className={`${componentClassName}-picture`}
      />

      <div className={`${componentClassName}-arrow`}>
        <button
          className={`${componentClassName}-arrow-prev`}
          onClick={prevIndex}
        >
          <img src={leftArrowDesktop} alt="Previous" />
        </button>
        <button
          className={`${componentClassName}-arrow-next`}
          onClick={nextIndex}
        >
          <img src={rightArrowDesktop} alt="Next" />
        </button>
      </div>

      <div className={`${componentClassName}-counter`}>
        {carouselIndex + 1}/{arrayImageLength}
      </div>
    </div>
  )
}

export default Carousel

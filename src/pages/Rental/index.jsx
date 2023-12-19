import { useParams } from "react-router"
import { rentals } from "../../utils/data/rentals.js"
import leftArrowDesktop from "../../assets/images/leftArrowDesktop.svg"
import rightArrowDesktop from "../../assets/images/rightArrowDesktop.svg"
import emptyStar from "../../assets/images/emptyStar.svg"
import filledStar from "../../assets/images/filledStar.svg"

import "../../utils/style/rental/rental.css"
import { useEffect, useState } from "react"

function Rental() {
  const { id } = useParams()
  const selectedRental = [...rentals].find((rental) => rental.id === id)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carouselImage = selectedRental.pictures
  const maxLength = carouselImage.length <= 1 ? 1 : carouselImage.length - 1
  console.log(maxLength)

  const prevIndex = () => {
    const actualIndex = carouselIndex
    if (maxLength === 1) return
    setCarouselIndex(actualIndex === 1 ? maxLength : actualIndex - 1)
  }

  const nextIndex = () => {
    const actualIndex = carouselIndex
    if (maxLength === 1) return
    setCarouselIndex(actualIndex === maxLength ? 0 : actualIndex + 1)
  }

  useEffect(() => {
    console.log("Current Index:", carouselIndex)
  }, [carouselIndex])

  return (
    <div className="content">
      <div className="rental">
        <div className="rental__carousel">
          <img
            src={carouselImage[carouselIndex]}
            alt={`${selectedRental.title}`}
            className="rental__carousel-picture"
          />

          <div className="rental__carousel-arrow">
            <button className="rental__carousel-arrow-prev" onClick={prevIndex}>
              <img
                src={leftArrowDesktop}
                alt="Previous"
                // className="rental__carousel-arrow-btn-prev"
              />
            </button>
            <button className="rental__carousel-arrow-next" onClick={nextIndex}>
              <img
                src={rightArrowDesktop}
                alt="Next"
                // className="rental__carousel-arrow-btn-next"
              />
            </button>
          </div>

          <div className="rental__carousel-counter">
            {carouselIndex + 1}/{maxLength + 1}
          </div>
        </div>

        <div className="rental__info">
          <div className="rental__info-text">
            <h2 className="rental__info-text-title">{selectedRental.title}</h2>
            <span className="rental__info-text-location">
              {selectedRental.location}
            </span>
          </div>
          <div className="rental__info-host">
            <div className="rental__info-host-name">
              {selectedRental.host.name}
            </div>
            <img
              src={selectedRental.host.picture}
              className="rental__info-host-picture"
              alt={selectedRental.host.name}
            />
          </div>
        </div>
        <div className="rental__info2">
          <div className="rental__info2-tagsList">
            <div className="rental__info2-tagsList-tag">1</div>
            <div className="rental__info2-tagsList-tag">2</div>
            <div className="rental__info2-tagsList-tag">3</div>
          </div>
          <div className="rental__info2-rating">
            <img src={filledStar} alt="" />
            <img src={filledStar} alt="" />
            <img src={filledStar} alt="" />
            <img src={emptyStar} alt="" />
            <img src={emptyStar} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rental

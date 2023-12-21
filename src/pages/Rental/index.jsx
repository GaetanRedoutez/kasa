import { useParams } from "react-router"

import { rentals } from "../../utils/data/rentals.js"

import emptyStar from "../../assets/images/emptyStar.svg"
import filledStar from "../../assets/images/filledStar.svg"

import Carousel from "../../components/Carousel/index.jsx"

import "../../utils/style/rental/rental.css"
import DropDown from "../../components/DropDown/index.jsx"

function Rental() {
  const { id } = useParams()
  const selectedRental = [...rentals].find((rental) => rental.id === id)

  const initalRating = new Array(5).fill(null)
  const ratingNumber = +selectedRental.rating

  const starArray = initalRating.map((element, index) =>
    index <= ratingNumber - 1 ? filledStar : emptyStar
  )

  return (
    <div className="content">
      <div className="rental">
        <Carousel
          selectedRental={selectedRental}
          componentClassName={"rental__carousel"}
        />

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
          <div className={`rental__info2-tagsList`}>
            {selectedRental.tags.map((tag, index) => (
              <div
                key={`${tag}-${index}`}
                className={`rental__info2-tagsList-tag`}
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="rental__info2-rating">
            {starArray.map((star, index) => (
              <img key={`${star}-${index}`} src={star} alt="rating star" />
            ))}
          </div>
        </div>

        <div className="rental__dropdown">
          <DropDown
            name="Description"
            componentClassName="rental__dropdown-description"
            items={selectedRental.description}
          />
          <DropDown
            name="Equipements"
            componentClassName="rental__dropdown-equipments"
            items={selectedRental.equipments}
          />
        </div>
      </div>
    </div>
  )
}

export default Rental

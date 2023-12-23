import { useParams } from "react-router"

import { rentals } from "../../data/rentals.js"

import emptyStar from "../../assets/images/emptyStar.svg"
import filledStar from "../../assets/images/filledStar.svg"

import Slider from "../../components/Slider/index.jsx"
import DropDown from "../../components/DropDown/index.jsx"
import Tags from "../../components/Tags/index.jsx"
import Rating from "../../components/Rating/index.jsx"

function Rental() {
  const { id } = useParams()

  const selectedRental = [...rentals].find((rental) => rental.id === id)

  const initalRating = new Array(5).fill(null)
  const ratingNumber = +selectedRental.rating

  const starArray = initalRating.map((element, index) =>
    index <= ratingNumber - 1 ? filledStar : emptyStar
  )

  return (
    <div className="rental">
      <Slider
        selectedRental={selectedRental}
        componentClassName={"rental__carousel"}
      />

      <div className="rental__info">
        <div className="rental__info--text">
          <h2 className="rental__info--text-title">{selectedRental.title}</h2>
          <span className="rental__info--text-location">
            {selectedRental.location}
          </span>
          <Tags
            tags={selectedRental.tags}
            className="rental__info--text-tagsList"
          />
        </div>
        <div className="rental__info--host">
          <div className="rental__info--host-data">
            <div className="rental__info--host-data-name">
              {selectedRental.host.name}
            </div>
            <img
              src={selectedRental.host.picture}
              className="rental__info--host-data-picture"
              alt={selectedRental.host.name}
            />
          </div>
          <Rating rating={starArray} className="rental__info--host-rating" />
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
  )
}

export default Rental

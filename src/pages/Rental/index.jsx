import { useParams, Navigate } from "react-router-dom"

import { rentals } from "../../data/rentals.js"

import emptyStar from "../../assets/images/emptyStar.svg"
import filledStar from "../../assets/images/filledStar.svg"

import DropDown from "../../components/DropDown/index.jsx"
import Rating from "../../components/Rating/index.jsx"
import Slider from "../../components/Slider/index.jsx"
import Tags from "../../components/Tags/index.jsx"

/**
 * Component for displaying details of a rental.
 * It includes a slider for images, rental information, host details, and dropdowns for description and equipment.
 *
 * @returns {JSX.Element} - The rendered Rental component.
 */
function Rental() {
  // Get the rental id from the route parameters
  const { id } = useParams()

  // Check if the rental with the given id exists
  const idExist = rentals.some((rental) => rental.id === id)

  // Redirect to error page if the rental id does not exist
  if (!idExist) {
    return <Navigate to="/error" />
  }

  // Get the details of the selected rental
  const selectedRental = rentals.find((rental) => rental.id === id)

  // Create an array of stars for the rating
  const initialRating = new Array(5).fill(null)
  const ratingNumber = +selectedRental.rating
  const starArray = initialRating.map((_, index) =>
    index <= ratingNumber - 1 ? filledStar : emptyStar
  )

  return (
    <div className="rental">
      {/* Slider for rental images */}
      <Slider
        selectedRental={selectedRental}
        componentClassName={"rental__carousel"}
      />

      {/* Rental information */}
      <div className="rental__info">
        <div className="rental__info--text">
          {/* Rental title, location, and tags */}
          <h2 className="rental__info--text-title">{selectedRental.title}</h2>
          <span className="rental__info--text-location">
            {selectedRental.location}
          </span>
          <Tags
            tags={selectedRental.tags}
            className="rental__info--text-tagsList"
          />
        </div>

        {/* Host information and rating */}
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

      {/* Dropdowns for description and equipment */}
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

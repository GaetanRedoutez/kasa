import { useEffect, useState, useRef } from "react"
import arrow from "../../assets/images/arrow.svg"

/**
 * Component to display a dropdown item.
 *
 * @param {string} name - Name displayed on the item.
 * @param {string} componentClassName - Specific class name for the item.
 * @param {Array|string} items - Can be an array of elements to display or a simple string.
 * @returns {JSX.Element} - The rendered dropdown component.
 */
function DropDown({ name, componentClassName, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0)
  }, [isOpen, items])

  // Map items to create list elements if items is an object
  const displayedItem =
    typeof items === "object"
      ? items.map((item, index) => <li key={`${index}`}>{item}</li>)
      : items

  return (
    <div className={`${componentClassName} dropdown`}>
      <button
        className={`${componentClassName}__btn dropdown__btn`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${componentClassName}__btn-name dropdown__btn-name`}>
          {name}
        </div>
        <img
          src={arrow}
          alt=""
          className={`${componentClassName}__btn-arrow dropdown__btn-arrow ${
            isOpen ? "up" : "down"
          }`}
        />
      </button>

      {/* Dropdown content */}
      <div
        className={`dropdown__content-wrapper ${
          isOpen ? "light-grey" : "toWhite"
        }`}
      >
        <ul
          ref={contentRef}
          className={`${componentClassName}__list dropdown__list`}
          style={{ height: `${height}px` }}
        >
          {displayedItem}
        </ul>
      </div>
    </div>
  )
}

export default DropDown

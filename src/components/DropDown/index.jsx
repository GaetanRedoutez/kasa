import { useEffect, useState } from "react"
import downArrow from "../../assets/images/downArrow.svg"
import upArrow from "../../assets/images/upArrow.svg"

function DropDown({ name, componentClassName, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [arrow, setArrow] = useState("")
  const [displayedItem, setDisplayedItem] = useState()
  const [displayClass, setDisplayClass] = useState("fade-out-block")

  useEffect(() => {
    isOpen ? setArrow(downArrow) : setArrow(upArrow)
  }, [isOpen])

  useEffect(() => {
    isOpen
      ? setDisplayClass("fade-in-block")
      : setDisplayClass("fade-out-block")
  }, [isOpen])

  useEffect(() => {
    const typeOfItems = typeof items
    if (typeOfItems === "string") {
      setDisplayedItem(items)
    } else if (typeOfItems === "object") {
      setDisplayedItem(
        items.map((item, index) => <li key={`${index}`}>{item}</li>)
      )
    }
  }, [items])

  return (
    <div className={`${componentClassName} dropdown`}>
      <button
        className={`${componentClassName}__btn dropdown__btn`}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <div className={`${componentClassName}__btn-name dropdown__btn-name`}>
          {name}
        </div>
        <img
          src={arrow}
          alt=""
          className={`${componentClassName}__btn-arrow dropdown__btn-arrow`}
        />
      </button>

      <ul
        className={`${componentClassName}__list dropdown__list ${displayClass}`}
      >
        {displayedItem}
      </ul>
      {}
    </div>
  )
}

export default DropDown

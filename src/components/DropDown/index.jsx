import { useEffect, useState } from "react"
import downArrow from "../../assets/images/downArrow.svg"
import upArrow from "../../assets/images/upArrow.svg"

function DropDown({ name, componentClassName, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [displayedItem, setDisplayedItem] = useState()

  const arrow = isOpen ? downArrow : upArrow

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
    <button className={`${componentClassName}`}>
      <div className={`${componentClassName}-name`}>{name}</div>
      <img src={arrow} alt="" className={`${componentClassName}-arrow`} />
      {isOpen ? (
        <ul className={`${componentClassName}-list`}>{displayedItem}</ul>
      ) : null}
    </button>
  )
}

export default DropDown

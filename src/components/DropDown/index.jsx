import { useEffect, useState } from "react"
import downArrow from "../../assets/images/downArrow.svg"
import upArrow from "../../assets/images/upArrow.svg"

function DropDown({ name, componentClassName, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [arrow, setArrow] = useState("")
  const [displayedItem, setDisplayedItem] = useState()

  useEffect(() => {
    isOpen ? setArrow(downArrow) : setArrow(upArrow)
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
    <div className={`${componentClassName}`}>
      <button
        className={`${componentClassName}-btn`}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <div className={`${componentClassName}-btn-name`}>{name}</div>
        <img src={arrow} alt="" className={`${componentClassName}-btn-arrow`} />
      </button>
      {isOpen ? (
        <ul className={`${componentClassName}-list`}>{displayedItem}</ul>
      ) : null}
    </div>
  )
}

export default DropDown

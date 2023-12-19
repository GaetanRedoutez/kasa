import { Link } from "react-router-dom"
import { rentals } from "../../utils/data/rentals.js"

function Cards({ sectionName }) {
  const handleClick = (id) => {
    console.log("click on : ", id)
  }

  return (
    <section className={sectionName}>
      {rentals.map((rental) => (
        <Link
          to={`/rental/${rental.id}`}
          key={rental.id}
          className={sectionName + "-Link"}
        >
          <article
            onClick={() => handleClick(rental.id)}
            className={sectionName + "-Link-article"}
            style={{ backgroundImage: `url(${rental.cover})` }}
          >
            <p className={sectionName + "-Link-article-title"}>
              {rental.title}
            </p>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Cards

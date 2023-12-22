import { Link } from "react-router-dom"
import { rentals } from "../../data/rentals.js"

function Cards() {
  return (
    <section className="cards">
      {rentals.map((rental) => (
        <Link
          to={`/rental/${rental.id}`}
          key={rental.id}
          className="cards__Link"
          style={{ backgroundImage: `url(${rental.cover})` }}
        >
          <article className="cards__Link-article">
            <p className="cards__Link-article-title">{rental.title}</p>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Cards

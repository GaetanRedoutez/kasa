import { Link } from "react-router-dom"
import { rentals } from "../../data/rentals.js"

/**
 * Component to render rental cards on the homepage.
 * Each card represents a rental item with a title and a cover image.
 *
 * @returns {JSX.Element} - The rendered Cards component.
 */
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

import { Link } from "react-router-dom"

/**
 * Component for displaying a 404 error page.
 * It includes a message about the non-existent page and a link to return to the home page.
 *
 * @returns {JSX.Element} - The rendered ErrorPage component.
 */
function ErrorPage() {
  return (
    <div className="errorPage">
      <h2 className="errorPage__h2">404</h2>
      <p className="errorPage__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorPage__Link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default ErrorPage

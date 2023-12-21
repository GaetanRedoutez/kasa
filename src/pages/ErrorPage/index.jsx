import { Link } from "react-router-dom"
import "../../utils/style/errorPage/error.css"

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

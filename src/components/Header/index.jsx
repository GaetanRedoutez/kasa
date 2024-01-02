import { Link } from "react-router-dom"

import logo from "../../assets/logo/logo.svg"

/**
 * Header component for the website.
 * Displays the company logos and navigation links.
 */
function Header() {
  return (
    <header className="header">
      <h1>Kasa</h1>
      <div className="header__logo">
        <img src={logo} alt="Logo Kasa" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-Link">
          Accueil
        </Link>
        <Link to="/About" className="header__nav-Link">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header

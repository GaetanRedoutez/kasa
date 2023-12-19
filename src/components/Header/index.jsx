import { Link } from "react-router-dom"

import DesktopK from "../../assets/logo/DesktopK.svg"
import DesktopIconA from "../../assets/logo/DesktopIconA.svg"
import DesktopS from "../../assets/logo/DesktopS.svg"
import DesktopA from "../../assets/logo/DesktopA.svg"

import "../../utils/style/header/header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={DesktopK} alt="K" className="header__logo-img" />
        <img src={DesktopIconA} alt="A Icon" className="header__logo-img" />
        <img src={DesktopS} alt="S" className="header__logo-img" />
        <img src={DesktopA} alt="A" className="header__logo-img" />
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

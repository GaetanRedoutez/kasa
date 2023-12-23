import { Link } from "react-router-dom"

import K from "../../assets/logo/redK.svg"
import ALogo from "../../assets/logo/redLogo.svg"
import S from "../../assets/logo/redS.svg"
import A from "../../assets/logo/redA.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={K} alt="A Logo" className="header__logo-img K" />
        <img src={ALogo} alt="A Logo" className="header__logo-img ALogo" />
        <img src={S} alt="A Logo" className="header__logo-img S" />
        <img src={A} alt="A Logo" className="header__logo-img A" />
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

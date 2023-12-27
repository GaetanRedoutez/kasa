import K from "../../assets/logo/whiteK.svg"
import ALogo from "../../assets/logo/whiteLogo.svg"
import S from "../../assets/logo/whiteS.svg"
import A from "../../assets/logo/whiteA.svg"

/**
 * Footer component for the website.
 * Displays the company logos and copyright information.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={K} alt="A Logo" className="header__logo-img" />
        <img src={ALogo} alt="A Logo" className="header__logo-img" />
        <img src={S} alt="A Logo" className="header__logo-img" />
        <img src={A} alt="A Logo" className="header__logo-img" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer

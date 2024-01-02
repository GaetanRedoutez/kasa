import logo from "../../assets/logo/logo-white.svg"

/**
 * Footer component for the website.
 * Displays the company logos and copyright information.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="A Logo" className="footer__logo-img" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer

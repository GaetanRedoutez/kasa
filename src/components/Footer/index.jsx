import WhiteK from "../../assets/logo/WhiteK.svg"
import WhiteIconA from "../../assets/logo/WhiteIconA.svg"
import WhiteS from "../../assets/logo/WhiteS.svg"
import WhiteA from "../../assets/logo/WhiteA.svg"

import "../../utils/style/footer/footer.css"
// import { useEffect, useState } from "react"

function Footer() {
  // const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolledToBottom =
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight
  //     setIsVisible(scrolledToBottom)
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  // const footerClass = isVisible ? "footer visible" : "footer"

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={WhiteK} alt="K" className="footer__logo-img" />
        <img src={WhiteIconA} alt="A Icon" className="footer__logo-img" />
        <img src={WhiteS} alt="S" className="footer__logo-img" />
        <img src={WhiteA} alt="A" className="footer__logo-img" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer

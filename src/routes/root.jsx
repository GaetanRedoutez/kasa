import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import About from "../pages/About"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Rental from "../pages/Rental"

function Root() {
  return (
    <div className="container">
      <Router>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rental/:id" element={<Rental />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default Root

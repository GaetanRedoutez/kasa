import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import About from "../pages/About"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Rental from "../pages/Rental"

/**
 * Root component for the application.
 * It defines the routes using react-router-dom and includes header, content, and footer components.
 *
 * @returns {JSX.Element} - The rendered Root component.
 */
function Root() {
  return (
    <div className="container">
      <Router>
        {/* Header, content, and footer components */}
        <div className="content">
          <Header />
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<Home />} />

            {/* Route for the about page */}
            <Route path="/about" element={<About />} />

            {/* Route for individual rental pages */}
            <Route path="/rental/:id" element={<Rental />} />

            {/* Route for handling unknown routes (404) */}
            <Route path="*" element={<ErrorPage />} />

            {/* Additional route for explicitly going to the error page */}
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>

        {/* Footer component */}
        <Footer />
      </Router>
    </div>
  )
}

export default Root

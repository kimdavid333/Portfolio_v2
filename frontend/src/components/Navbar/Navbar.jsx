import React, {useState, useEffect} from 'react'
import "./Navbar.scss"
import { images } from "../../constants"

const Navbar = () => {
  const [toggleOn, setToggleOn] = useState(false)

  const handleToggle = () => {
    setToggleOn((prev) => !prev)
  }

  console.log(toggleOn)

  return (
    <header>
      <div className="logo">
        <img src={images.devjane} alt="" />
      </div>
      <button
        className={`nav-toggle ${toggleOn ? "nav-open" : ""}`}
        // className={buttonClass}
        onClick={handleToggle}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
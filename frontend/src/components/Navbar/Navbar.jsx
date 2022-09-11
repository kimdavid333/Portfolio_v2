import React, {useState, useEffect} from 'react'
import "./Navbar.scss"
import { images } from "../../constants"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleOn, setToggleOn] = useState(false)

  const handleToggle = () => {
    setToggleOn((prev) => !prev)
  }

  return (
    <header className={`nav-toggle ${toggleOn ? 'nav-open' : ''}`}>
      <div className='logo'>
        <img src={images.devjane} alt='' />
      </div>
      <button
        className='nav-toggle'
        // className={buttonClass}
        onClick={handleToggle}
        aria-label='toggle navigation'
      >
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href="/#home" className="nav__link" onClick={handleToggle}>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a href='/#about' className='nav__link' onClick={handleToggle}>
              About me
            </a>
          </li>
          <li className='nav__item'>
            <a href='/#work' className='nav__link' onClick={handleToggle}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
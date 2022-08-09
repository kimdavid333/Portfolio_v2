import './Header.scss'
import React from "react"

const Header = () => {
  return (
    <div>
      <section className="header" id="home">
        <h1 className="main__name section__title section__title--header">Sun Hwy Kim</h1>
        <p className="section__subtitle section__subtitle--header">
          SOFTWARE DEVELOPER
        </p>
        <a href="#work" className="btn main__btn">WORK</a>
      </section>
    </div>
  )
}

export default Header
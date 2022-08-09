import React, { useState, useEffect } from "react"
import { images } from "../../constants"
import "./Work.scss"

const Work = () => {
  

  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <p className="section__subtitle"></p>

      <div className="portfolio">
        {/* <!-- Portfolio item 01 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio1} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 2 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio2} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 3 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio3} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 4 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio4} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 5 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio5} alt="" className="portfolio__img" />
        </a>

        {/* <!-- Portfolio item 6 --> */}
        <a href="#" className="portfolio__item">
          <img src={images.portfolio6} alt="" className="portfolio__img" />
        </a>

      </div>
    </section>
  )
}

export default Work

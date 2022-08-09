import React, { useState, useEffect } from "react"
import "./Skills.scss"
import AppWrap from "../../wrapper/AppWrap"

const Skills = () => {

  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design + Development</h3>
          <p>
            I love to design and solve problem for my customers.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>WordPress</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* <!-- / service --> */}
      </div>
      {/* <!-- / services --> */}

      <a href="#work" className="btn">My Work</a>
    </section>
  )
}

export default Skills

import { About, Footer, Header, Skills, Work } from "../../container"
import { Navbar } from "../../components"
import React from 'react'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      {/* <Skills /> */}
      <About />
      <Footer />
    </div>
  )
}

export default Landing
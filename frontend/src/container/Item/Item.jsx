import React from 'react'
import "./Item.scss"
import { Footer } from "../../container"
import { Navbar } from "../../components"
import { images } from "../../constants"

const Item = () => {
    return (
      <div className="projectPage">
        <Navbar />
        <section className="intro">
          <h1 className="section__title section__title--intro">
            Automated Production Lines IoT Monitoring
          </h1>
          <span className="section__underline"></span>
          <img src={images.robot_arm} alt="" className="intro__img" />
        </section>

        <div className="portfolio-item-individual">
          <p>
            In-house application that provide necessary services to monitor
            automated factory-line machineries. Leveraged HiveMQ to transfer
            sensor data to the server.
          </p>

          <p>Insert Tech Stack Info here</p>

          <img src={images.portfolio10} alt="" />

          <h3>Project Objective</h3>
          <p>
            The goal was to create a fast and reliable web application which can
            collect & visualize live vibration data, and analyze & share data
            among engineers.
          </p>

          <p>
            The company had to pivot away from a network of wired sensors to
            wireless data communication to increase its coverage while
            minimizing the cost. The challenge was to build a web application
            that can handle multiple large data volumn ( 6K samples per second)
            of realtime data while web application remain responsive to client
            requests.
          </p>

          <h3>Web Stack and Services/Features</h3>
          <p>
            As the company is in the beginning phase of development, the team is
            often experimenting with various libraries and technologies. In
            order to answer to such demand, I decided to use Flask to build the
            server for its flexibility and ability to easily extend various
            services.
          </p>
          <p>For the database I used PostgreSQL and Flask-SQLAlchemy ORM.</p>
          <p>Lastly, React and D3.js was used on the client side.</p>

          <h4>Feature #1: Realtime visualization</h4>
          <p>
            Raw data from sensors are transferred to the server in real time
            using HiveMQ MQTT service. Conversely, the sercan can also remote
            control the DAQ application via MQTT communication.
          </p>
          <p>
            Once received, the live data will be visualized, stored, and
            analyzed. <strong>[insert the demo here]</strong>
          </p>
          <p>
            In order to plot real-time data, socketio was used. In order to
            fully customize the plotting functionality, its was written from
            ground up using D3.js library.{" "}
          </p>
          <p>
            The displayed are The FFT waveform and the bottom chart is the
            corresponding time-domain waveform. The FFT result and time-domain
            data can be download from the interface.{" "}
          </p>
        </div>
        <Footer />
      </div>
    )
    }
    
    export default Item
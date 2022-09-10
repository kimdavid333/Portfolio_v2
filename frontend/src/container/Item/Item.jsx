import React from 'react'
import "./Item.scss"
import { Footer } from "../../container"
import { Navbar } from "../../components"
import { images } from "../../constants"

const Item = () => {
    return (
      <div className='projectPage'>
        <Navbar />
        <section className='intro project--intro'>
          <h1 className='section__title section__title--intro'>
            Automated Production Lines IoT Monitoring
          </h1>
          <span className='section__underline'></span>
          <img src={images.robot_arm} alt='' className='intro__img' />
        </section>

        <div className='portfolio-item-individual'>
          <p className='para--summary'>
            A web application that provides necessary services to monitor an
            automated production line composed of heavy machinery. Leveraged
            multiple communication protocols (MQTT, WebSocket, etc.) to build a
            reliable and robust DAQ data channel.
          </p>

          <h3>Project Objective</h3>
          <p>
            The goal was to create a fast and reliable web application that can
            visualize and analyze live vibration data, and share data among
            engineers.
          </p>

          <p>
            The company had to pivot away from a network of wired sensors to
            wireless data communication to increase its coverage while
            minimizing the cost. The challenge was to build an application that
            could handle multiple, large-sized real-time data while remaining
            responsive to requests.
          </p>

          <h3>Web Stack and Services/Features</h3>
          <p>
            As the company is in the beginning phase of development, the team
            often experiments with various libraries and technologies. Thus, I
            decided to go with Flask to build the server for its simplicity and
            ability to customize through various extensions.
          </p>
          <p>
            For the database, I used PostgreSQL and utilized Flask-SQLAlchemy
            ORM.
          </p>
          <p>Lastly, React and D3.js were used on the client side.</p>

          <h4>Feature #1: DAQ Control</h4>
          <p>
            The program provides an interface for users to configure DAQ
            devices, such as setting sample rates and sample points. The
            mechanism is built on the HiveMQ MQTT cloud service to send the
            configuration data from the server to DAQ devices.
          </p>
          <iframe
            title='vimeo-player'
            className='demo-clip'
            src='https://player.vimeo.com/video/748207977?h=96ee7dac92'
            width='640'
            height='360'
            frameborder='0'
            allowfullscreen
          ></iframe>
          <p>
            Leveraged Python APScheduler to either run the sensors continuously
            or target a specific timeframe.
          </p>
          <p>
            Lastly, the software offers email alarm features. When the sensor
            data exceeds a certain threshold, the program will alarm the
            inspector running the current experiment. It utilizes Flask-Mail to
            implement the service.
          </p>

          <h4>Feature #2: Realtime visualization</h4>
          <p>
            Raw data from sensors are transferred to the server using the HiveMQ
            MQTT service. Once the data reaches the server, it will be
            visualized, stored, and analyzed. The server will feed the data to
            the frontend through a WebSocket connection. This allows the fast
            updates of real-time visualization.
          </p>
          <iframe
            title='vimeo-player'
            className='demo-clip'
            src='https://player.vimeo.com/video/738045106?h=a210ec2747'
            width='640'
            height='390'
            frameborder='0'
            allowfullscreen
          ></iframe>
          <p>
            The displayed are The FFT waveform and the bottom chart is the
            corresponding time-domain waveform. The FFT result and time-domain
            data can be downloaded from the interface.
          </p>

          <h3>Problems and Thought Process</h3>
          <p>
            The tricky part of this project was integrating Flask with React,
            making sure both ends could communicate with each other. For
            instance, I was having trouble setting up websocket connection as
            the request to establish the connection was not reaching the
            backend. Eventually, I discover http-proxy-middleware to connect the
            both ends together to handle http requests & response cycles.
          </p>
          <p>
            Additionally, this was the first project in which I used React
            extensively. I got to experiment with various use cases for React
            useState and useEffect, and developed an appreciation for Component
            reusablity. It greatly helped me to organize and structure frontend
            codes.
          </p>
        </div>
        <Footer />
      </div>
    );
    }
    
    export default Item
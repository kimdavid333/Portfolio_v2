import React from 'react'
import "./Item.scss"
import { Footer } from ".."
import { Navbar } from "../../components"
import { images } from "../../constants"

const Item2 = () => {
    return (
      <div className='projectPage'>
        <Navbar />
        <section className='intro project--intro'>
          <h1 className='section__title section__title--intro'>
            Kaswin DAQ Monitoring
          </h1>
          <span className='section__underline'></span>
          <img
            src={images.integrated_daq_thumbnail}
            alt=''
            className='intro__img'
          />
        </section>

        <div className='portfolio-item-individual'>
          <p className='para--summary'>
            Web application serves as a Mediator to control other DAQ programs.
          </p>

          {/* <p>Insert Tech Stack Info here</p> */}

          <h3>Project Objective</h3>
          <p>
            The project’s primary objective was to support the R&D team with the
            development of a smart spindle (insert a link here). Since the
            development heavily relies on machine-learning models, the team
            needed a way to create and manage a large-scale vibration and
            current dataset.
          </p>

          <p>
            As a result, the client requested me to develop a web application
            where engineers can remotely control DAQ devices, which can store
            and display live data. It needs to handle downloads of large files
            as datasets often get shared among engineers to verify and train
            their models.
          </p>

          <h3>Web Stack and Services/Features</h3>
          <p>
            The backend was built using Flask, leveraging its server-side
            rendering and dynamic routing features. Flask extensions handled
            most of its functionalities, such as authentication and database
            migration.
          </p>
          <p>Plotly.js library was used for data visualization.</p>
          <p>PostgreSQL and Flask-SQLAlchemy ORM are used for the database.</p>

          <h4>Feature #1: Multiple DAQ modes</h4>
          <p>
            The application supports multiple modes of collecting data. For
            instance, an engineer can access a single DAQ unit to save and view
            live data, or controls multiple DAQ devices simultaneously. Below is
            the general architecture that describes the latter.
          </p>
          <img
            src={images.multiple_daq}
            className='section__img'
            alt='Diagram depicting multiple DAQ mode architecture'
          />
          <p>
            Once the server receives a http request to start the experiment, the
            server will broadcast the event with all relevant information. The
            message will get picked up by the intermediary program, denoted as
            ‘Proxy’ above, which will orchestrate DAQ units to read & share data
            synchronously. It is connected to the database so it is tasked to
            save the data received to an appropriate data table.
          </p>
          <p>
            DAQ units are also small python applications I wrote on the
            PC/raspberry-pi, to which physical sensors are connected.
          </p>

          <h4>Feature #2: Asynchronous task queue (Celery & Message Queue)</h4>
          <p>
            There were two use cases for the asynchronous task queue: to support
            a download of a large file and to display progression stats on the
            main page (e.g. status & counts). The server was not fit for the job
            since it had to stay open for possible client requests. Here is how
            I resolved the problem.
          </p>

          <h5>Progression Display</h5>
          <img
            src={images.progression}
            className='section__img'
            alt='Diagram showing how I structured my code to support asynchronous task queue'
          />
          <p>
            Celery workers will run in the background, repeatedly querying DB
            for the latest status and counts.
          </p>
          <p>
            The result will be accessible via API endpoint based on the worker’s
            task_id
          </p>

          <h5>Download</h5>
          <img
            src={images.download_sequence}
            className='section__img'
            alt='Diagram depicting multiple DAQ mode architecture'
          />
          <p>
            Initially, server was not able to handle download of files larger
            than 50MB. While the server is sending data packet to a user, the
            server will lose a socket connection to the user as the server is
            too busy to respond to the client’s ping in time.
          </p>
          <p>
            To resolve the broken pipeline issue, I decided to delegate this
            task to the celery workers. A worker will make the download data API
            call which will notify it with the path to the resulting zip file.
            Then the worker will send the file to the user, small blobs at a
            time.
          </p>
          <img
            src={images.download}
            className='section__img'
            alt='Diagram depicting multiple DAQ mode architecture'
          />
          <p>As a result, the server can handle a file larger than 100MB. </p>

          <h3>Demo</h3>
          <iframe
            title='vimeo-player'
            className='demo-clip'
            src='https://player.vimeo.com/video/748200167?h=daa03b1e44'
            width='640'
            height='661'
            frameborder='0'
            allowfullscreen
          ></iframe>
        </div>

        <Footer />
      </div>
    );
    }
    
    export default Item2
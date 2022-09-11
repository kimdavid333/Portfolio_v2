import "./About.scss"
import React from "react"
import { images } from "../../constants"

const About = () => {
  const mySkills = [
    "Python",
    "React",
    "JavaScript",
    "PostgreSQL",
    "Flask",
    "Node",
  ]

  return (
    <section className='about-me' id='about'>
      <div className='container'>
        <h2 className='section__title section__title--about' id='about-me'>
          ABOUT ME
        </h2>
        <p className='section__subtitle section__subtitle--work'>
          Software Engineer, based in NYC
        </p>

        <div className='about-me__body'>
          {/* <p>
  My legal name is Sun Hwy Kim, but most people call me David.
</p> */}

          <p>
            Hi! My name is Sun Hwy (pronounced like hee), but most people call
            me David. I'm a graduate of{' '}
            <strong>Johns Hopkins University</strong> with an Applied
            Mathematics and CS major.
          </p>
          <p>
            Started my professional career as a data analyst. By accident, I was
            given a task to build a web application, which rekindled my passion
            for software development. As an aspiring junior web developer, I
            seek to build efficient and scalable applications while providing
            simple yet engaging user experiences.
          </p>
          <p>When I'm not coding, I enjoy running and going to F45 classes.</p>

          <a
            href='https://www.dropbox.com/scl/fi/qiwr2cfndktg33h0b3u1g/David-Kim_Resume.docx?dl=0&rlkey=45ri0s0iyhnt5y4n38wrgm0gl'
            className='btn link--resume'
          >
            View my resume
          </a>
        </div>

        <div className='section__technical'>
          <h2 className='section__title section__title--about'>
            SKILLS & TOOLS
          </h2>
          <p className='section__subtitle section__subtitle--work'>
            My Toolbox & Things I Can Do
          </p>
          <div className='skillsGrid'>
            {mySkills.map((skill, index) => {
              return (
                <div key={index} className='skill-item'>
                  <img src={images[skill.toLowerCase()]} />
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

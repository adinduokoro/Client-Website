import React from 'react'
import "./About.css"
import aboutPic from "../../images/about-pic.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='about__container container'>
        <img src={aboutPic} alt="" />

      </div>

    </section>
  )
}

export default About
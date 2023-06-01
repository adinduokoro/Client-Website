import React from 'react'
import "./About.css"
import aboutPic from "../../images/about-pic.jpg"

const About = () => {
  return (
    <section className='about' id='about' style={{scrollMarginTop: "7.5rem"}} >
      <div className='about__container container'>
        <img src={aboutPic} alt="" />
        <div className='about__overlay'></div>
      </div>

    </section>
  )
}

export default About
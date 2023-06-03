import React from 'react'
import "./Offer.css"

const Offer = () => {
  const service = [
    {text: "FIRST TIME SHOOTER"},
    {text: "CLASSES & TRAINING"},
    {text: "SELF DEFENSE TRAINING"},
    {text: "INITIAL WEAR & CARRY/RENEWAL"},
    {text: "SECURITY GUARD CLEARANCE"},
    {text: "HANDGUN QUALIFICATION CERT. (HQL)"},
  ]

  return (
    <section className='offer' id='offer' style={{ scrollMarginTop: "7.5rem" }}>
      <div className="offer__container container">
        <h2 className="section__title">What We Offer</h2>
        <span className="section__subtitle">Firearm Saftey & Training</span>
        <div className="offerCard__container">
          <div className="offerCard">
            First Time Shooter
          </div>
        </div>


      </div>
    </section>
  )
}

export default Offer
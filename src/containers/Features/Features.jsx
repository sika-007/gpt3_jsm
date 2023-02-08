import React from 'react'
import "./features.css"
import { Feature } from '../../components'
import { nanoid } from 'nanoid'

const Features = () => {

  const featureData = [
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
  ]

  const featureItems = featureData.map(featureArrItem => {
    return <Feature 
      key={nanoid()}
      title={featureArrItem.title}
      text={featureArrItem.text}
    />
  })


  return (
    <div className="gpt3__features section__padding" id="features" data-aos="fade-right" data-aos-delay="150"
    data-aos-duration="1000">
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To realize it. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureItems}
      </div>
    </div>
  )
}

export default Features

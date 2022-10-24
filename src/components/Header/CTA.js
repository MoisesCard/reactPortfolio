import React from 'react'
import CV from "../../assets/RESUME.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA
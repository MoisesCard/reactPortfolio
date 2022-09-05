import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Moises Cardenas</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='Photo of Moises'></img>
        </div>
        <a href='#Contact' className='scroll-down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
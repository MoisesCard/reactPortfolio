import React from 'react'
import "./footer.css"
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Moises Cardenas</a>

      <ul className='permalinks'>
        <il><a href='#'>Home</a></il>
        <il><a href='#About'>About</a></il>
        <il><a href='#Experience'>Experience</a></il>
        <il><a href='#Portfolio'>Portfolio</a></il>
        <il><a href='#Contact'>Contact</a></il>
      </ul>

      <div className='footer_socials'>
      <a href='https://linkedin.com/in/moises-cardenas-port' target='_blank'><AiOutlineLinkedin/></a>
        <a href='https://instagram.com/moises.thegreat' target='_blank'><AiOutlineInstagram/></a>
        <a href='https://github.com/MoisesCard' target='_blank'><AiOutlineGithub/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Moises Cardenas. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
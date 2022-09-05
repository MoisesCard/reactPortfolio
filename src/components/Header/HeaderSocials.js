import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/in/moises-cardenas-port' target='_blank'><AiOutlineLinkedin/></a>
        <a href='https://github.com/MoisesCard' target='_blank'><AiOutlineGithub/></a>
        <a href='https://instagram.com/moises.thegreat' target='_blank'><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials
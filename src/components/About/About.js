import React from 'react'
import "./About.css"
import ME2 from '../../assets/ME2.png'
import {MdOutlineComputer}  from 'react-icons/md'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME2} alt='Second photo of Moises'></img>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <MdOutlineComputer className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about_card'>
              <HiOutlineFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            {/* <article className='about_card'>
              <GrPersonalComputer className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article> */}
          </div>

          <p>
              Born in 1996, in Aguascalientes, Mexico. My name is Moises Cardenas. I am a full stack developer
              based in Florida, USA. I believe that Web Development is an art form where the user can be presented with an 
              enjoyable and unforgetable experience, and my goal is to give them that experience.
          </p>

          <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
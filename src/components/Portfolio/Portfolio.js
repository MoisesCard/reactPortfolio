import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='The Front Yard'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='LensTrends'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='Note Taker'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='ReadMe Generator'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt='Budget Tracker'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG6} alt='Weather Dashboard'/>
          </div>
          <h3>****Project Title****</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://.........com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
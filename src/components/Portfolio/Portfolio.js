import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG7 from '../../assets/portfolio7.jpg'


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG7} alt='Drink Up'/>
          </div>
          <h3>Drink Up</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/israel386/drink-up.git' className='btn' target='_blank'>Github</a>
            <a href='https://secret-inlet-46407.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt='The Front Yard'/>
          </div>
          <h3>The Front Yard</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/robsquaadd/the-front-yard.git' className='btn' target='_blank'>Github</a>
            <a href='https://the-front-yard.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt='LENSTrends'/>
          </div>
          <h3>LENSTrends</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MoisesCard/Lens-Trends.git' className='btn' target='_blank'>Github</a>
            <a href='https://moisescard.github.io/Lens-Trends/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt='Note Taker'/>
          </div>
          <h3>Note Taker</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MoisesCard/noteTaker.git' className='btn' target='_blank'>Github</a>
            <a href='https://rocky-inlet-12261.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG4} alt='ReadMe Generator'/>
          </div>
          <h3>ReadMe Generator</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MoisesCard/ReadMe-generator.git' className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio_items'>
          <div className='portfolio_item-image'>
            <img src={IMG5} alt='Budget Tracker'/>
          </div>
          <h3>Budget Tracker</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MoisesCard/budgetTracker.git' className='btn' target='_blank'>Github</a>
            <a href='https://warm-springs-90553.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
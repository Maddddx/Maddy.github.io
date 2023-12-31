import React from 'react'
import './Home.css'
import ReactTypingEffect from 'react-typing-effect'

// component
import About from './About'
import Certificates from './Certificate'
import Project from './Projects'
import Footer from './Footer'

function Home() {
  return (
    <div className='superhead'>
      <div className='container'>
        <section className='content'>
          <div className='content-text'>
            <ReactTypingEffect text={["HEY! I'M NARAKORN BUNKERT"]} speed={65} eraseDelay={150} className='typingeffect'></ReactTypingEffect>
            <img className='mobile-img' src='./!!me.jpg' />
            <p className='mobile-text'>HEY! I'M NARAKORN BUNKERT</p>
            <p className='content-text-info'>
              I’m student at WatSuthiwararam School in Gifted program
              in Bangkok Thailand.
            </p>
            <div className='social'>
              <a href='https://github.com/Maddddx' target='_blank' rel='noopender noreferrer'><i class="fab fa-github"></i></a>
              <a href='https://www.instagram.com/narakorn.z/' target='_blank' rel='noopender noreferrer'><i class="fab fa-instagram"></i></a> 
              <a href='https://twitter.com/hmm_Madd' target='_blank' rel='noopender noreferrer'><i class="fab fa-twitter"></i></a>
              <a href='mailto:narakorn0a@gmail.com' target='_blank' rel='noopender noreferrer'><i class="far fa-envelope"></i></a>
            </div>
          </div>
          <div className='content-img'>
            <img src='./!!me.jpg' />
          </div>
        </section>
      </div>

      <About />
      <Project />
      <Certificates />
      <Footer />
    </div>
  )
}

export default Home
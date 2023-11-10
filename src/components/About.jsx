import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <div className='head1' id='about'>
        <section className='top'>
          <img className='top-img' src='./Me!!!.jpg'></img>
          <div className='top-text'>
            <p className='top-header'>HI.I'M NARAKORN</p>
            <p className='top-info'>I used ‘mad’ as my nickname. I am student who is passionate about Machine Learning and Web Development in the filed of computer engineer. My goal is to become a  software engineer in the future.
              I wish this personal portfolio helps you get to know me better.</p>
            <div className='skill-con'>
              <p className='skill-text'>SKILLS</p>
              <div className='group-logo'>
              <img id='python'className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'></img>  
              <img id='jupyter' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png'></img>
              <img id='C' className='skill-logo' src='https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png'></img>
              <img id='nodejs' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'></img>
              <img id='React_lan' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
              <img id='js' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'></img>
              <img id='HTML_lan' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'></img>
              <img id='CSS_lan' className='skill-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png'></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


export default About
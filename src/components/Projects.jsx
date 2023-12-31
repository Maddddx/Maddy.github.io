import React from 'react'
import './Project.css'

function Projects() {
  return (
    <>
      <div className='P-page' id='projects'>
        <h1 className='P-head'>My Projects</h1>
        <div className='P-box'>

          <div>
            <a href='https://github.com/Maddddx'><img src='./Project_img/!sir.jpg'></img></a>
            <p className='twop-info'>SIR Model and LSTM to predict covid-19 case</p>
            <p className='P-mobile-info'>SIR Model and LSTM to</p>
            <p className='P-mobile-info'>Predict covid-19 case</p>
          </div>

          <div>
            <a href='https://github.com/Maddddx'><img src='./Project_img/titanic1.jpg'></img></a>
            <p className='P-info'>Predict Survived from Titanic</p>
          </div>

          <div>
            <a href='https://github.com/Maddddx'><img src='./Project_img/insurance.jpg'></img></a>
            <p className='P-info'>Insurance Charge Prediction</p>
          </div>

          <div>
            <a href='https://github.com/Maddddx/mytcas.clone'><img className='clone' src='./Project_img/mytcas_clone2.jpg'></img></a>
            <p className='P-info'>Mytcas clone</p>
          </div>

          <div>
            <a href='https://github.com/Maddddx/Maddy.github.io'><img className='clone' src='./Project_img/my_web.jpg'></img></a>
            <p className='P-info'>Personal Portfolio Website</p>
          </div>

          <div>
            <a href='https://github.com/Maddddx'><img src='./Project_img/tk.jpg'></img></a>
            <p className='P-info'>Whiteboard by Tkinter Python</p>
          </div>

        </div>

        <h1 className='P-head'>My Activities</h1>
        <div className='P-box'>

          <div>
            <img src='./act/bg1.jpg'></img>
            <p className='P-info'>Organized a board game competition</p>
          </div>

          <div>
            <img src='./act/TYBC4.jpg'></img>
            <p className='bg-info'>Wining 3rd place at </p>
            <p className='bg-info'>Thailand Board Game Championship2022</p>
            <p className='P-mobile-info'>Wining 3rd place at</p>
            <p className='P-mobile-info'>Thailand Board Game Championship2022</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects
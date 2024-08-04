import React from 'react'
import profile_img from '../../assets/profile_img.jpg'
import './about.css'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
          <h1>About me</h1>
          <img src="" alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p> I am Pratyaksh, currently pursuing my Master of Computer Applications (MCA) at the esteemed National Institute of Technology (NIT), Warangal. </p>
              <p>My academic journey has been driven by a keen interest in technology, particularly in the fields of Data Structures and Algorithms (DSA) and Web Development and MySql.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} ></hr></div>
              <div className="about-skill"><p>Data Structure & Algorithm</p> <hr style={{width:"50%"}} ></hr></div>
              <div className="about-skill"><p>Node.js & Express.js</p> <hr style={{width:"50%"}} ></hr></div>
              <div className="about-skill"><p>JavaScript</p> <hr style={{width:"70%"}} ></hr></div>
              <div className="about-skill"><p>React.js</p> <hr style={{width:"50%"}} ></hr></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement"><h1>0+</h1><p>year of experience</p></div> <hr />
            <div className="about-achievement"><h1>10+</h1><p>projects Completed</p></div> <hr />
            <div className="about-achievement"><h1>700+</h1><p>Completed Problems in DSA</p></div> 
        </div>
    </div>
  )
}

export default About
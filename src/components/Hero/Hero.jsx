import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Pratyaksh,</span> MCA Student in National Institute of Technology, Warangal.</h1>
        <p>I am Web developer , Problem solver in  Data Structure and Algorithms.</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink  className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink ></div>
            <div className="hero-cv" ><a href="">download  cv</a></div>
        </div>
    </div>
  )
}

export default Hero
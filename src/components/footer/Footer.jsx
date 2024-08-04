import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
               <p>Feel free to connect with me  to explore more of my work and discuss opportunities for collaboration in tech and beyond.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe" type='submit'> Subscribe </div>
            </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
          <p className='footer-bottom-left'>  &copy; 2025 Pratyaksh Sharma all rights are reserverd.</p>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/pratyaksh-sharma-a5201024a/"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/pratyaksh.sharma.712161/?hl=en"><InstagramIcon/></a>
            <a href="https://github.com/pratyaksh2299"><GitHubIcon/></a>
            
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
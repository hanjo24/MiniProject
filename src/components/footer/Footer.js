import React from 'react'
import './footer.css'
import Logo from '../../image/logo.png'

const Footer = () => {
  return (
    <footer>
        <div className='upper-footer'>
            <div className='upper-rigth-side-footer'>
                <h6>About</h6>
                <p>Developlaza is a company founded in the philippines by 4 capable website developers</p>
            </div>
            <div className='upper-left-side-footer'>
                <h6>Quick links</h6>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#team'>The Team</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contactus'>Contact Us</a></li>
                </ul>
            </div>
            <div className='footer-logo'>
                <img  src={Logo} alt="..."/>
            </div>
        </div>
        
        <div className='lower-footer'>
            <p>All Rights Reserved ® Copyright</p>
        </div>
        
    </footer>
  )
}

export default Footer
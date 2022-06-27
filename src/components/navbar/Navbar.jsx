import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../image/logo.png';



const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#team'>The Team</a></p>
  <p><a href='#projects'>Projects</a></p>
  <p><a href='#contactus'>Contact Us</a></p>
  </>
)

// BEM - Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='devlaza_navbar gradient_bg'>
      <div className='devlaza_navbar-links'>
        <div className='devlaza_navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='devlaza_navbar-links_container'>
        <Menu />
        </div>
      </div>
      {/* <div className='devlaza_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div> */}

      {/* MOBILE NAVBAR */}

      <div className='devlaza_navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={ () => setToggleMenu(false)} />
        : <RiMenu3Line color="#FFF" size={27} onClick={ () => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='devlaza_navbar-menu_container scale-up-center'>
            <div className='devlaza_navbar-menu_container-links'>
            <Menu />
            {/* Sign in - Sign up Button */}
            {/* <div className='devlaza_navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
           </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
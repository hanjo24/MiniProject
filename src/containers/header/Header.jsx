import React from 'react';
import './header.css';
import people from '../../image/people.png';
import atom from '../../image/atom.png';

const Header = () => {
  return (
    <div className='devlaza_header section_padding gradient_bg' id='home'>
      <div className='devlaza_header-content'>
        <h1 className='gradient_text'>We build delightful digital experiences</h1>
        <p>Affordable, innovative, timely. With over 15 years of experience in software development and digital marketing, we plan, build and promote new applications so you don’t have to.</p>
        <div className='devlaza_header-content_input'>
          <input type="email" placeholder="Your email address" />
          <button type='button'>Get Quoute</button>
        </div>
        <div className='devlaza_header-content_people'>
          <img src={people} alt="people" />
          <p>1500 people requested access a visit in last 24hrs</p>
        </div>
      </div>
        <div className='devlaza_header-image'>
          <img src={atom} alt="robot" />
        </div>
    </div>
  )
}

export default Header
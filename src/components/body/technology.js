import React from 'react'
import './technology.css'
import bootstrap from '../../image/bootstrap-plain.svg';
import css from '../../image/css3-plain.svg';
import html5 from '../../image/html5-plain.svg';
import javascript from '../../image/javascript-plain.svg';
import mysql from '../../image/mysql-plain.svg';
import nodejs from '../../image/nodejs-plain.svg';
import php from '../../image/php-plain.svg';
import python from '../../image/python-original.svg';
import sass from '../../image/sass-original.svg';
import typescript from '../../image/typescript-plain.svg';

const Technology = () => {
  return (
    <div className='technologies'>
        <h1>Technology</h1>
        <p>Here are some of the Technologies at our disposal!</p>
    <div className='technology-list'>
        <div className='tech'>
            <img src={bootstrap} alt="..."></img>
            <h3>Bootstrap</h3>
        </div>
        <div className='tech'>
            <img src={css} alt="..."></img>
            <h3>CSS</h3>
        </div>
        <div className='tech'>
            <img src={html5} alt="..."></img>
            <h3>HTML</h3>
        </div>
        <div className='tech'>
            <img src={javascript} alt="..."></img>
            <h3>Javascript</h3>
        </div>
        <div className='tech'>
            <img src={mysql} alt="..."></img>
            <h3>MySql</h3>
        </div>
        <div className='tech'>
            <img src={nodejs} alt="..."></img>
            <h3>NodeJS</h3>
        </div>
        <div className='tech'>
            <img src={php} alt="..."></img>
            <h3>PHP</h3>
        </div>
        <div className='tech'>
            <img src={python} alt="..."></img>
            <h3>Python</h3>
        </div>
        <div className='tech'>
            <img src={sass} alt="..."></img>
            <h3>SASS</h3>
        </div>
        <div className='tech'>
            <img src={typescript} alt="..."></img>
            <h3>TypeScript</h3>
        </div>
        </div>
    </div>
  )
}

export default Technology
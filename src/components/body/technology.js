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
    <div className='technology-list'>
        <div className='tech'>
            <img src={bootstrap}></img>
            <h3>Bootstrap</h3>
        </div>
        <div className='tech'>
            <img src={css}></img>
            <h3>CSS</h3>
        </div>
        <div className='tech'>
            <img src={html5}></img>
            <h3>HTML</h3>
        </div>
        <div className='tech'>
            <img src={javascript}></img>
            <h3>Javascript</h3>
        </div>
        <div className='tech'>
            <img src={mysql}></img>
            <h3>MySql</h3>
        </div>
        <div className='tech'>
            <img src={nodejs}></img>
            <h3>NodeJS</h3>
        </div>
        <div className='tech'>
            <img src={php}></img>
            <h3>PHP</h3>
        </div>
        <div className='tech'>
            <img src={python}></img>
            <h3>Phython</h3>
        </div>
        <div className='tech'>
            <img src={sass}></img>
            <h3>SASS</h3>
        </div>
        <div className='tech'>
            <img src={typescript}></img>
            <h3>TypeScript</h3>
        </div>
        </div>
    </div>
  )
}

export default Technology
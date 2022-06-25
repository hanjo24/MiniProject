import React from 'react';
import Webistepic from '../../image/website.jpg'
import Mobilepic from '../../image/mobileapp.jpg'
import './website.css'

function UpperPortion() {
    return (
        <div className='upper-website'>
            <div className='upper-left-side'>
                <img src={Webistepic} alt='...'></img>
            </div>
            <div className='upper-right-side'>
                <h2>We Develop Websites</h2>
                <p>Here at Developerlaza, we provide top of the industry quality of service when it comes to developing websites that satisfy your needs and level your playing field, whether it is for business, entertainment, or for your own personal blogs websites. We can handle it all and give you the website you deserve.</p>
            </div>
        </div>
    )
}

function LowerPortion() {
    return (
        
        <div className='lower-website'>
            <div className='lower-left-side'>
                <img src={Mobilepic} alt='...'></img>
            </div>
            <div className='lower-right-side'>
                We also offer services to turn your passion, ideas, and visions in to a mobile app. Our team well equipped with the necessary skillset and tools to develop your mobile app. 
            </div>
        </div>
    )
}


export default function Websites() {
    return (
        <div>
            <UpperPortion />
            <LowerPortion />
        </div>
    )
}

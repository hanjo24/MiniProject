import React from 'react';
import Webistepic from '../../image/website.jpg'
import Mobilepic from '../../image/mobileapp.jpg'
import './website.css'

function UpperPortion() {
    return (
    <div>
        <hr class="style13"></hr>
        <div className='upper-website'>
            
            <div className='upper-left-side'>
                <img src={Webistepic} alt='...'></img>
            </div>
            <div className='upper-right-side'>
                <h2>We Develop Websites</h2>
                <p>Here at <span className='text1'>Developerlaza</span> , we provide top of the industry quality of service when it comes to developing websites that satisfy your needs and level your playing field, whether it is for business, entertainment, or for your own personal blogs websites. We can handle it all and give you the website you deserve.</p>
            </div>
        </div>
        
    </div>
    )
}

function LowerPortion() {
    return (
        <div>
        <div className='lower-website'>
            <div className='lower-left-side'>
                <img src={Mobilepic} alt='...'></img>
            </div>
            <div className='lower-right-side'>
               <h2>Developing World Class Mobile Apps</h2>
               <p> We also offer services to turn your passion, ideas, and visions in to a mobile app. Our team well equipped with the necessary skillset and tools to develop your mobile app. </p>
            </div>
        </div>
        <hr class="style14"></hr>
        </div>
    )
}


export default function Websites() {
    return (
        <div className='website_body' id=''>
            <UpperPortion />
            <LowerPortion />
        </div>
    )
}

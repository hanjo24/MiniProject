import React from 'react'
import './profilecards.css'
import profile1 from '../../image/profile1.jpg';
import profile2 from '../../image/profile2.png';
import profile3 from '../../image/profile3.jpg';
import profile4 from '../../image/profile4.jpg';
import pillar1 from '../../image/people.jpg';
import pillar2 from '../../image/process.jpg';
import pillar3 from '../../image/expertise.jpg';
import pillar4 from '../../image/flexibility.jpg';
import link from '../../image/link-solid.svg';
import github from '../../image/github-original.svg';
import bgheader from '../../image/coverphoto.png';


const Profilecards = () => {
  return (
    <div className='our-team' id='team'>
        <div className='team-header' style={{ backgroundImage: `url(${bgheader})` }}>
            <div className='team-header-desc'>
                <h1 className='gradient_text'>THE DEVELOPLAZA</h1>
                <p>We're lead by a team who constantly questions, tinkers, and challenges <br></br>to unlock great creativity around every turn.</p>
            </div>
        </div>

        <div class="our-team-title">
          <h1>MEET OUR TEAM</h1>
        </div>
        <p className='description'>We are a team of solution-oriented IT specialists who bring digital transformation to your business and daily life. <br></br>
            We know how to translate ideas into custom software solutions meeting the priority needs of our clients.</p>
        <div className='profiles'>
        <div class = "container">
        <div class = "card">
          <div class = "image image3">
            <img src ={profile3} alt="..."></img>
          </div>
          <div class = "content">
            <h3>WEB DEVELOPER</h3>
            <h4>Paul Pastor</h4>
            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <div className='links'>
            <a href='https://github.com/PaulMaverick' target = "_blank" rel="noreferrer"><img src={github} width="20px" alt="..."></img></a>
            <a href='https://paulmaverick.github.io/portfolio/' target = "_blank" rel="noreferrer"><img src={link} width="20px" alt="..."></img></a>
            </div>
          </div>
        </div>    
      </div>

      <div class = "container">
        <div class = "card">
          <div class = "image image2">
            <img src ={profile2} alt="..."></img>
          </div>
          <div class = "content">
            <h3>WEB DEVELOPER</h3>
            <h4>Christian Gomonit</h4>
            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
            <div className='links'>
            <a href='https://github.com/xchan824/' target = "_blank" rel="noreferrer"><img src={github} width="20px" alt="..."></img></a>
            <a href='https://xchan824.github.io/portfolio-v1/' target = "_blank" rel="noreferrer"><img src={link} width="20px" alt="..."></img></a>
            </div>
          </div>
        </div>    
      </div>

      <div class = "container">
        <div class = "card">
            <div class = "image image1">
              <img src ={profile1} alt="..."></img>
              </div>
              <div class = "content">
                <h3>WEB DEVELOPER</h3>
                <h4>Johan Genuino</h4>
                <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                <div className='links'>
                <a href='https://github.com/hanjo24' target = "_blank" rel="noreferrer"><img src={github}  width="20px" alt="..."></img></a>
                <a href='https://hanjo24.github.io/Portfolio/' target = "_blank" rel="noreferrer"><img src={link} width="20px" alt="..."></img></a>
              </div>
            </div>
          </div>    
        </div>
      
      <div class = "container">
        <div class = "card">
          <div class = "image image4">
            <img src ={profile4} alt="..."></img>
          </div>
          <div class = "content">
            <h3>WEB DEVELOPER</h3>
            <h4>Nike Fernandez</h4>
            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            <div className='links'>
            <a href='https://github.com/nikegfernandez' target = "_blank" rel="noreferrer"><img src={github} width="20px" alt="..."></img></a>
            <a href='https://nikegfernandez.github.io/naykportfolio.io/' target = "_blank" rel="noreferrer"><img src={link} width="20px" alt="..."></img></a>
          </div>
        </div>
      </div>    
  </div>
    </div>
    
    <div className='profile-bot'>
    <div class="pillar-title">
        <h1>Four Pillars of Our Work</h1>
        </div>
    <div className='pillars-container'>
    <div className='pillars'>
        <div className='pillar-img pillar'>
            <img src={pillar1} alt="..."></img>
        </div>
        <div className='pillar-description'>
            <h3>01</h3>
            <h2>People</h2>
            <p>Exposit gathers together high-qualified specialists passionate about solving complex business challenges using custom software solutions.
            Thanks to the strong community and culture of knowledge exchange, you collaborate with a professional software development team sharing the same values and experience since 2012.</p>
        </div>
    </div>
    <div className='pillars'>
        <div className='pillar-img pillar'>
            <img src={pillar2} alt="..."></img>
        </div>
        <div className='pillar-description'>
            <h3>02</h3>
            <h2>Process</h2>
            <p>Solving your IT challenges is our main priority. Our production and administrative processes are carefully configured to quickly respond to your requests and provide the 
            results you expect without blowing your mind. We will respond to your requests within a few hours, evaluate your project idea within 2-4 working days, and deliver your project on time.</p>
        </div>
        
    </div>
    <div className='pillars'>
        <div className='pillar-img pillar'>
            <img src={pillar3} alt="..."></img>
        </div>
        <div className='pillar-description'>
            <h3>03</h3>
            <h2>Expertise</h2>
            <p>We have successfully completed more than 275 Web and Mobile projects continuously accumulating tech and domain experience in our competence centers. Today, we 
            provide our customers with top-performing service lines and deliver high-value solutions based on expertise in Computer Vision, Gamification & Visualization, Media Streaming, and Atlassian.</p>
        </div>
    </div>
    <div className='pillars'>
    <div className='pillar-img pillar'>
            <img src={pillar4} alt="..."></img>
        </div>
        <div className='pillar-description'>
            <h3>04</h3>
            <h2>Flexibility</h2>
            <p>Our clients run unique businesses using individual approaches. We make collaboration with Exposit comfortable for your business, offering 3 models of cooperation suitable for different 
            project needs. We are willing to go on a business trip to provide consultation, take part in short-term training, or learn about your business in detail.</p>
        </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Profilecards
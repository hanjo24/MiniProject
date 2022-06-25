import React from 'react'

import { Header} from './containers';
import { Navbar } from './components';
import { Reviews } from './components';
import Websites from './components/body/Websites';
import Slider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';
import Technology from './components/body/technology'
import Profilecards from './components/team/profilecards';

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>

        <div>
          <Websites />
        </div>
        <div>
          <Technology/>
        </div>
        <div>
          <Slider slides={SliderData} />
        </div>

        <Profilecards/>
      
    </div>
  )
}

export default App
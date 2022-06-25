import React from 'react'

import { Header} from './containers';
import { Navbar } from './components';
import { Reviews } from './components';
import Websites from './components/body/Websites';
import Slider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';

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
          <Slider slides={SliderData} />
        </div>
      
    </div>
  )
}

export default App
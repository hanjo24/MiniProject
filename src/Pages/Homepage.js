import React from 'react';
import { Header } from '../containers';
import Websites from '../components/body/Websites';
import Slider from '../components/Slider/Slider';
import { SliderData } from '../components/Slider/SliderData';

const Homepage = () => {
  return (
    <div>
        <Header />
        <Websites />
        <Slider slides={SliderData} />
    </div>
  )
}

export default Homepage
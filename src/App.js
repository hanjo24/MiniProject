import React from 'react'

import { Header} from './containers';
import { Navbar } from './components';
import Websites from './components/body/Websites';
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
      
    </div>
  )
}

export default App
import React from 'react'

import { Header} from './containers';
import { Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
      
    </div>
  )
}

export default App
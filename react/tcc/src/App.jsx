import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import graficodepiza from './assets/graficodepiza.png'
import './App.css'

function App() {


  return(
    <div>
      <header>POPULATIONAL GROWTH</header>
        <div class="right">
          <b>
            <h1>
              What is populational growth?
            </h1>
          </b>
          <p>
            Population growth happens when birth rate is higher than death rate.
            <br/>
            It can be influenced by imigration, though, not relevant when we talk about the world.
          </p>
        </div>
        <div class="left">
          <b>
            <h1>
              Data over the years
            </h1>
          </b>
          <img src="graficodepiza.png" alt="" />
          <p>

          </p>
        </div>


      
    </div>
  );
}

export default App
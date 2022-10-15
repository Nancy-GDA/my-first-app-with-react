//imprtamos los archivos donde tengo diferentes fracmentos de codigo que ayudan a la creacion de los componentes
import React , { useState} from 'react'
import './App.css';
import ListOfGift from './components/listOfGift'
import { Route, Link} from 'wouter'

//Funcion para crear la app en react
function App() {
  return (
    <div className="App">
      <section className="App-container">
        <h1>App de gift</h1>
        <div className='container-link'>
        <Link to='/gif/baby-dance'>Gif de bebes bailando</Link>
        <Link to='/gif/pole-dance'>Gif de Pole dance</Link>
        <Link to='/gif/risas'>Gif de risas</Link>
        <Link to='/gif/caras-graciosas'>Gif de caras graciosas</Link>
        <Link to='/gif/caidas'>Gif de caidas</Link>
        </div>
        
        <Route 
        component={ListOfGift}
        path="/gif/:keyword"/>
      </section> 
    </div>
  );
}

export default App;

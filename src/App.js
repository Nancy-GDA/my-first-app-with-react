//imprtamos los archivos donde tengo diferentes fracmentos de codigo que ayudan a la creacion de los componentes
import React , { useState} from 'react'
import './App.css';
import ListOfGift from './components/listOfGift'

//Funcion para crear la app en react
function App() {
  //creamos un array con la keywordy el cambio que tendra la keyword y por defecto le pasamos al estado que busque babys bailando
  const [keyword,setKeyword] = useState('babys-dance')

  return (
    <div className="App">
      <section className="App-container">
        <ListOfGift keyword={ keyword }/>
      </section> 
        {/* cree un boton para que al darle click cambie de keyword y de estado por bebes perros */}
        <div className='container-btn'>
          <button onClick={()=>setKeyword ('dogs-puppies') } className='btn-gift'>Cambiar Gift</button> 
        </div>
    </div>
  );
}

export default App;

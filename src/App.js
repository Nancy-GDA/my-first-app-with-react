//imprtamos las 
import React , {useState,useEffect} from 'react'
import './App.css';
import getGifts from './getGifs';
import Gift from './components/gitf'



function App() {

  const [gift,setGift] = useState([])
  useEffect(()=> {
   getGifts({keyword:'baby'}).then(gift => setGift(gift))
  },[])
  
  

  return (
    <div className="App">
      <section className="App-container">
      {
      gift.map(setGift => <Gift title={setGift.title} url ={setGift.url} id ={setGift.id} />
      )
      }
      <button onClick={()=>setGift() }>Cambiar Gift</button>
      </section>
    </div>
  );
}

export default App;

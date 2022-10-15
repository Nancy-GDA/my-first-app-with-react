import React from 'react'
import '../components/gifts.css'

//exportamos la estructura del componente react para ponerla en la app principal
export default function Gift ({ title, id ,url }){
    return  (
      <a href={`#${id}`} className='container-create-gift'>
        <img src={url} alt={title} />
        <h4>{title}</h4>
      </a>
    )

}
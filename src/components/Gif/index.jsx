import React from 'react'
import './gif.css'
import Fav from 'components/Fav'
import { Link } from 'wouter'

// exportamos la estructura del componente react para ponerla en la app principal
export default function Gift ({ title, id, url }) {
  return (
    <div className='Gif'>
      <div className='Gif-buttons'>
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <img src={url} alt={title} />
        <h4>{title}</h4>
        <img src={url} alt={title} loading='lazy' />
      </Link>
    </div>

  )
}

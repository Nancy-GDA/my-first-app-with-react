import React from 'react'

export default function Gift ({ title, id ,url }){
    return  <div>
    <h4>{title}</h4>
    <p>{id}</p>
    <img src={url} alt={title} />
  </div>

}
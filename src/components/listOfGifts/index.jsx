import React from 'react'
import Gift from './Gitf'
import './ListOfGif.css'

export default function listOfGif ({ gift }) {
  return (
    <div className='div-gift'>
      {
        gift.map(({ id, title, url }) =>
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />
        )
        }
    </div>
  )
}

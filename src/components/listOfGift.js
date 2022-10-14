import React, { useEffect, useState } from "react"   
import Gift from "./gitf"
import getGifts from '../getGifs'
/*exportamos la funcion donde le pasamos los gift  y retornamos un objeto donde con el map filtra el id,titley url */
export default function ListOfGift({ keyword }){
    /*se utiliza aqui el hooks de useState para pasarle el gift y el siguiente comportamiento a desencadenar
    con useEffect pasamos el estado del actualizador  con la keyword y pasamos el git */
const [gift,setGift] = useState([])

useEffect(()=> {
    getGifts({ keyword })
    .then(gift =>
    setGift(gift))
    },[keyword])

    return gift.map(({ id,title,url }) => 
        <Gift 
            id ={id} 
            key={id}
            title={title} 
            url ={url} 
        />)
    }
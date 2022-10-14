//Traemosnuestra apikey para pasarla por la url 
const apiKey = 'HzfP3zf3XhFXTyv9T30dacVntoiED5s1'

//exportamos la funcion getGifts y le pasamos un objeto con el keyword y otro vacio y posteriormente traemos la url de la api
export default function getGifts({keyword = 'baby'} =  {}){
    const APIUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=8&offset=0&rating=g&lang=en`
//retornamos la llamada de la funcion mediante  fetch 
    return  fetch(APIUrl)
    .then(res => res.json())
    .then(response =>{
        const {data} = response
        if(Array.isArray(data)){
            const gifts = data.map(image => {
                const { images , title ,id } = image
                const { url } = images.downsized_medium
                
                return { title,id,url }
            })
            return gifts
        }
    })
    .catch(err => console.log(err))
}
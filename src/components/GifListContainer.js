import React, { useState, useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

const key = "G9yy8N7KuQUiDb0nb8APD0eCuTSl2aWT"
function GifListContainer() {
   
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState("dogs")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((res) => res.json())
        .then((data) => {
            // const newGifs = data.map((d) => d.data) 
            setGifs(data.data)
            // console.log(data.data)
        })
    }, [query])
  
    function handleSearch(q) {
        setQuery(q)
    }
   
    return (
        <div>
            <GifSearch onSearch={handleSearch}/>
            <GifList gifs={gifs} />
        </div>
    )

}

export default GifListContainer
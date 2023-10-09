import React from "react"

function GifList({ gifs }) {


const gifList = gifs.map((g) => (
    <li key={g.id}>
        <img src={g.images.original.url} alt="gif" />
    </li>
))

    return ( 
        <ul>
            {gifList}
        </ul>        
    )
}

export default GifList
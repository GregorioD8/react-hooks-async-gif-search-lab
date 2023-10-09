import React, {useState} from "react"

function GifSearch({ onSearch }) {

    const [search, setSearch] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        onSearch(search)
        setSearch("")
    }

    return (
        <div className="ui search">
            <div className="ui icon input">
            <label>Enter a Search Term</label>
               <form 
               placeholder="Search..."
               onSubmit={handleSubmit}
               >
                <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
               
                ></input>
                <button >Find Gifs</button>
               </form>
            </div>
        </div>

    )
}

export default GifSearch
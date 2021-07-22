import React, { useState } from 'react'
import {DebounceInput} from 'react-debounce-input';

const Search = ({input,setInput}) => {
    
    return (
        <>
            <div className="input-group-lg">
                <DebounceInput
                    type="text"
                    name="Photo Search"
                    placeholder="Search your photos"
                    className="searchBox"
                    minLength={2}
                    debounceTimeout={300}
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
            </div>
        </>
    )
}

export default Search

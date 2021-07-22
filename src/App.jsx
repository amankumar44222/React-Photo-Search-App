import React  from 'react';
import Search from './Search';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Gallery from './Gallery';
import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    return (
        <center>
            <h1>Welcome To Photos Search App</h1>
            <Search input={input} setInput={setInput}/>
            <Gallery query={input}/>
        </center>
    )
}

export default App

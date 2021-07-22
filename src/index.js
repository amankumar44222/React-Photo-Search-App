import React from 'react';
import ReactDOM from 'react-dom';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
    , document.getElementById("root")
);



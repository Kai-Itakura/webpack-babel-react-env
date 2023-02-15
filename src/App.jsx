import React from "react";
import Hello from './components/Hello';
import './style/app.css';

const App = () => {
    return (
        <h1 className="sample">
            Hello React with Webpack!!!!!
            <Hello />
        </h1>
    )
}

export default App;
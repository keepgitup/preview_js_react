// import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
    const comments =["Thank you","3q","2","hey"];
    return (
   <ul className="comments">
    <li>{comments[0]}</li>
    <li>{comments[1]}</li>
    <li>{comments[2]}</li>
   </ul>


    );
}

export default App;
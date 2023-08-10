import React, {useState, useContext, lazy, Suspense} from 'react';
import './App.css';
import Router from "./Components/Router"

function App() {
  
  return (
    <div className="App">

<div className="container" style={{padding:'10px 0 0 0'}}>
    <div className="row">

        <div className=""style={{width:'170px', height:'150px', backgroundColor:'gray'}} >
            <h1>메인사진</h1>
        </div>
        
        <Router></Router>
    
    </div>
    
</div>

    </div>
  );
}

export default App;

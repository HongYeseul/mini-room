import React, {useState, useContext, lazy, Suspense} from 'react';
import './App.css';
import Router from "./Components/Router"

function App() {
  return (
    <div className="App">

<div className="container" style={{padding:'10px 0 0 0'}}>
  <div className="row">

    <div className=""style={{width:'170px', height:'150px', backgroundColor:'gray', position:'relative'}} >
        <img src='./images/profile.png' alt="메인사진" height='100px'
          style={{position:'absolute', top:'50%', margin:'-30% 0 0 -30%'}}
        ></img>
    </div>
    
    <Router></Router>
    
  </div>
    
</div>

    </div>
  );
}

export default App;

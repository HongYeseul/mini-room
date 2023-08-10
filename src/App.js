import React, {useState, useContext, lazy, Suspense} from 'react';
import { Navbar, Nav, Container, Col, Row, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import {Link, Route, Switch, useHistory} from 'react-router-dom'
import Router from "./Components/Router"

function App() {
  
  return (
    <div className="App">

<div className="container" style={{padding:'10px'}}>
  <header>
    <div className="row">

        {/* 메인 메뉴 */}
        {/* <div className="col-sm-6, other"> */}
        <div className=""style={{width:'170px', height:'150px', backgroundColor:'gray'}} >
            <h1>메인사진</h1>
        </div>
        
        <Router></Router>
    
      </div>
    </header>
    

  {/* <div className='row'>
    <div style={{width:'820px', height:'500px', backgroundColor:'skyblue'}}>
      <MakePage1></MakePage1>
    </div>

  </div> */}
    
</div>

    </div>
  );
}

function MakePage1(props){
  return(
    <div>홈페이지</div>
  )
}

export default App;

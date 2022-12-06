import React, {useState, useContext, lazy, Suspense} from 'react';
import { Navbar, Nav, Container, Col, Row, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import {Link, Route, Switch, useHistory} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">

<div className="container" style={{padding:'10px'}}>
  <div className="row">

    {/* 메인 메뉴 */}
    {/* <div className="col-sm-6, other"> */}
    <div className=""style={{width:'170px', height:'150px', backgroundColor:'gray'}} >
        <h1>메인사진</h1>
    </div>

    {/* <div className="col-sm-6"> */}
    <div className=""style={{width:'650px', height:'150px', backgroundColor:'#999'}} >
      <h1>예슬's 미니룸</h1> Merry Christmas
      <Navbar bg="light" variant="light">
        <Container style={{}}>
          <Navbar.Brand href="#home">메인가기</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#letter">공지</Nav.Link>
            <Nav.Link href="#visiter">방명록</Nav.Link>
            <Nav.Link href="#camera">카메라</Nav.Link>
            <Nav.Link href="#photo">사진첩</Nav.Link>
            <Nav.Link href="#setting">관리</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

    
    
    
  </div>

  <div className='row'>
    {/* 메인 페이지들. 여기가 바뀌어야함 */}
    <div style={{width:'820px', height:'500px', backgroundColor:'skyblue'}}>
      <MakePage1></MakePage1>
    </div>

  </div>
    
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

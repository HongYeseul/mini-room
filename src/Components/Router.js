import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../Pages/home";
import LetterPage from "../Pages/letter";
import CameraPage from "../Pages/camera";
import VisitorPage from "../Pages/visitor";
import { Navbar, Nav, Container, Col, Row, Button, Jumbotron } from 'react-bootstrap';
import PhotoPage from "../Pages/photo";
import SettingPage from "../Pages/setting";

export default function Router() {
return (
<BrowserRouter>

<header>
    <div className=""style={{width:'650px', height:'150px', backgroundColor:'#999'}} >
        <h1>예슬's 미니룸</h1> Hello👋
        <Navbar bg="light" variant="light">
        <Container style={{}}>
            <Navbar.Brand href="/">메인가기</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="letter">공지</Nav.Link>
            <Nav.Link href="visitor">방명록</Nav.Link>
            <Nav.Link href="camera">카메라</Nav.Link>
            <Nav.Link href="photo">사진첩</Nav.Link>
            <Nav.Link href="setting">관리</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
</header>

<Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/letter' element={<LetterPage />} />
    <Route path='/visitor' element={<VisitorPage />} />
    <Route path='/camera' element={<CameraPage />} />
    <Route path='/photo' element={<PhotoPage />} />
    <Route path='/setting' element={<SettingPage />} />
</Routes>

</BrowserRouter>
);
}
import React from "react";
import "./style/visitorStyle.css";
import { Image, Container, Col, Row } from 'react-bootstrap';

export default function PhotoPage() {
    return (
    <div>
        <div style={{width:'820px', height:'500px', backgroundColor:'skyblue'}}>
            <div className="intro">
                <h3 className="text">사진첩</h3>
                <h2 className="text">|</h2>

                <h3 className="text">우</h3>
                <h5 className="text">리들의 </h5>
                <h3 className="text">행</h3>
                <h5 className="text">복했던 </h5>
                <h3 className="text">시</h3>
                <h5 className="text">간 </h5>
            </div>
            
            <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="https://cdn.pixabay.com/photo/2017/01/26/18/09/length-landscape-2011238_1280.jpg" rounded
                    style={{width:'240px', height:'180px'}}/>
                </Col>

                <Col xs={6} md={4}>
                <Image src="https://cdn.pixabay.com/photo/2017/01/26/18/09/length-landscape-2011238_1280.jpg" rounded
                    style={{width:'240px', height:'180px'}}/>
                </Col>
                
                <Col xs={6} md={4}>
                <Image src={"./images/photo/test.jpg"} rounded
                    style={{width:'240px', height:'180px'}}/>
                </Col>
            </Row>
            </Container>

        </div>

    </div>
    );
}


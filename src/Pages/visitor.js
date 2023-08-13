import React from "react";
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import "./style/visitorStyle.css";

export default function VisitorPage() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        // event.preventDefault();
        // event.stopPropagation();
        // }

        // setValidated(true);
        console.log("버튼 클릭");
    };

return (
    <div>
        <div style={{width:'820px', height:'500px', backgroundColor:'skyblue'}}>
            <div className="intro">
                <h3 className="text">방명록</h3>
                <h2 className="text">|</h2>
                <h5 className="text">나를 찾아주는 방문자와 안부를 묻고 대화를 나눌 수 있어요.</h5>
            </div>
            
            <div className="bubble">
                <Form onSubmit={handleSubmit}>
                    <Form.Control className="form" id="nickname" type="text" placeholder="이름" required/>
                    <Form.Control className="form" id="letter" as="textarea" rows={3} placeholder="내용을 입력하세요." required/>
                    <Button type="submit" id="submit">글쓰기</Button>
                </Form>
            </div>
        </div>

    </div>
);
}
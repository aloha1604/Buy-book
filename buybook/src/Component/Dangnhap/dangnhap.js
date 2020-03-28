import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input,Container,Button } from 'reactstrap';
import './dangnhap.css'

class dangnhap extends Component {
    render() {
        return (
            <Container>
            <Form className="mt-4">
                <FormGroup>
                    <Label for="exampleEmail">From Đăng Nhập</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Nhập email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Nhạp password"
                    />
                </FormGroup>
                <FormGroup>
                    <Button className="btn-submit">Submit</Button>
                </FormGroup>
            </Form>
        </Container>
           
            
        );
    }
}

export default dangnhap;
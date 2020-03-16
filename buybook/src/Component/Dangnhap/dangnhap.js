import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './dangnhap.css'

class dangnhap extends Component {
    render() {
        return (
            <div className="formDangNhap">
                <Form>
                    <FormGroup row>
                        <Label className="text" for="exampleEmail" sm={2} size="lg">Email</Label>
                        <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email" bsSize="lg" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label className="text" for="exampleEmail2" sm={2} size="lg">Password</Label>
                        <Col sm={10}>
                        <Input type="password" name="password" id="exampleEmail2" placeholder="password" bsSize="lg" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            
        );
    }
}

export default dangnhap;
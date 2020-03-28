import React ,{Component} from 'react'
import { Form, FormGroup, Label, Input, Button,Container} from 'reactstrap';
import './dangky.css';

class Dangky extends Component {
    render() {
        return (
            <div>
               <Container>
                    <Form className="mt-4">
                        <FormGroup>
                            <Label for="exampleEmail">From Đăng ký</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleNumber">Họ Tên</Label>
                            <Input
                            type="text"
                            name="Hoten"
                            id="exampleHoten"
                            placeholder="Nhập họ tên "
                            />
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
            </div>
        );
    }
}

export default Dangky ;
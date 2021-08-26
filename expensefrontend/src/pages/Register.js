import React from 'react'
import {Form,Button,Container} from "react-bootstrap"
export default function Register() {
    return (
        <div>
            <Container>
                <h1>Registration</h1>
            <Form style={{marginTop:"10%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Emails</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login

  </Button>
        </Form>
        </Container>
 </div>
    )
}

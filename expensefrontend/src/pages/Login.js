import React,{useState} from 'react'
import {Form,Button,Container} from "react-bootstrap"
export default function Login() {
   const  [email,setEmail]=useState('');
   const [password,setPass]=useState(''); 

   return (
        <div>
            <Container>

                <h1>Login {password} </h1>
            <Form style={{marginTop:"10%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password" required value={password} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login

  </Button>
        </Form>
        </Container>
 </div>
    )
}

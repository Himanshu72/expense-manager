import React,{useState} from 'react'
import {Form,Button,Container} from "react-bootstrap"
import axios from "axios";
import { useHistory } from "react-router-dom"

export default function Login() {
   const  [email,setEmail]=useState('');
   const [password,setPass]=useState(''); 
   const history = useHistory(); 
   const submit=()=>{
   
    axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: {
        email: email,
        password: password
      }
    }).then((res)=>{  
        let data=res.data;
        localStorage.setItem("token",data.token);
        localStorage.setItem("data", JSON.stringify( data.data));
        history.push("/");
    }).catch((e)=>{
      alert("Invalid Password");
    })
      
    }
       
       return (
        <div>
            <Container>

                <h1>Login  </h1>
            <Form style={{marginTop:"10%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password" required value={password} />
  </Form.Group>
  
  <Button variant="primary" onClick={submit} >
    Login

  </Button>
        </Form>
        </Container>
 </div>
    )
}

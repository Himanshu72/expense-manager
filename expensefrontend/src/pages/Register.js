import React ,{useState} from 'react'
import {Form,Button,Container} from "react-bootstrap"
import axios from "axios";
import { useHistory } from 'react-router-dom';
export default function Register() {

let [email,setEmail]=useState("");
let [password,setPassword]=useState("");
let [cpassword,setCpassword]=useState("");
let [name,setName]=useState("");
let history=useHistory();
let reg=()=>{
  
  if(password!==cpassword)
      alert("Password must be equal to confirm password");
   else{
          if(password.length < 4 )
            alert("Password must be greater then  4 char");
          else{
            axios({
              method: 'post',
              url: 'http://localhost:4000/reg',
              data: {
                email: email,
                password: password,
                name:name
              }
            }).then((res)=>{  
                let data=res.data;
                console.log(data.data,data.token);
                localStorage.setItem("token",data.token);
                localStorage.setItem("data", JSON.stringify(data.data) );
                history.push("/");
            }).catch((e)=>{
              alert("Something went wrong");
            })

          }

   }   
}
  return (
        <div>
            <Container>
                <h1>Registration</h1>
            <Form style={{marginTop:"10%"}}>
 
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter email" />
    
  </Form.Group>
 
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Emails</Form.Label>
    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}  placeholder="Password" />
  </Form.Group>
  <Button variant="primary" onClick={reg} >
    Submit

  </Button>
        </Form>
        </Container>
 </div>
    )
}

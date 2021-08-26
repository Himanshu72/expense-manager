
import { PredictSingleFaceExpressionsWithFaceAlignmentTask } from 'face-api.js/build/commonjs/globalApi/PredictFaceExpressionsTask';
import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"
export default function CNavbar() {
    const history=useHistory();
let logout=()=>{
    
      localStorage.clear("token");
      localStorage.clear("user");
      history.push("/login");
}  


  return (
            <div>
            <Navbar bg="light" expand="lg">
  <Container>
    
      <Navbar.Brand ><Link to="/"> Expense Manager</Link>  </Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       <Nav.Link> <Link to="/login"> Login </Link> </Nav.Link>
        <Nav.Link> <Link to="/reg"> Register </Link>  </Nav.Link>   
        
      </Nav>
      <Nav>
     
     <Button  onClick={logout}  variant="danger" >Logout</Button>
      
    </Nav>
    </Navbar.Collapse>
  </Container> 
</Navbar>
        </div>
        )
}

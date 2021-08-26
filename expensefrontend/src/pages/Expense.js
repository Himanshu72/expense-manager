import React,{useState} from 'react'
import { Container, Row,Table,Col,Form,Button    } from 'react-bootstrap'

export default function Expense() {
  
  const [total,setTotal]=useState(0);
  const [list,setList]=useState([]);
  const  [category,setCategor]=useState("");
  const [expenses,setExpenses]=useState(0);
  const [category2,setCategor2]=useState("");
  return (
        <div>
            <Container className="my-5">
                <h1>Expenses</h1>
                <Row style={{margin:"3%"}}>

                    <Col xs="5">
                    <strong>Total Expense :<span style={{color:"red"}}> RS {total}</span> </strong> 
                    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Category</th>
      <th>Expense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  
  </tbody>
</Table>
                     </Col>
                    <Col>
                    <h4> Add Category </h4>
                    <Form>
                    <Form.Group className="mb-3">
                      <Row >  
                    <Col md={8}>
                    <Form.Control value={category} onChange={(e)=>setCategor(e.target.value)}   required type="text" placeholder="Enter Category" />
                    </Col>
                    <Col style={{textAlign:"left"}}>
                    <Button variant="secondary" type="submit">
                        Add

                     </Button>
                     </Col>
                        </Row>
                    </Form.Group>

                <br /><br />
        </Form>
                  <h4> Add Expenses </h4>
                   <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Expense</Form.Label>
    <Form.Control required value={expenses} onChange={(e)=>setExpenses(e.target.value)}  type="number" placeholder="Enter Expense Rs" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Category</Form.Label>
    <Form.Control type="text" value={category2} onChange={(e)=>setCategor2(e.target.value)}  placeholder="Category" required />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Add

  </Button>
        </Form>
  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

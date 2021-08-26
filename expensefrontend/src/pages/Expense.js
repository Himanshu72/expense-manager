import React,{useState} from 'react'
import { Container, Row,Table,Col,Form,Button,DropdownButton,Dropdown    } from 'react-bootstrap'
import axios from 'axios';
export default function Expense() {
  
  
  
  
  
  let all=JSON.parse(localStorage.getItem("data"));
  let showList=[];
  let total1=0;
  for(let x=0;x<all.expense.length;x++){
    total1=total1+all.expense[x].expense;  
    showList.push(
        <tr>
      <td>{x + 1}</td>
      <td>{all.expense[x]._id}</td>
      <td>{all.expense[x].expense}</td>
        
     </tr>
      )
  }

  let sc=[];
  for(let x=0;x < all.catagory.length ;x++){
      sc.push(
        <Dropdown.Item eventKey={all.catagory[x]} >{all.catagory[x]}</Dropdown.Item>
      );
  }

  const [total,setTotal]=useState(total1);
  const [list,setList]=useState(showList);
  const  [category,setCategor]=useState("");
  const [expenses,setExpenses]=useState(0);
  const [category2,setCategor2]=useState("");
   const [showCat,setShowCat]=useState(sc); 
  
  const [date,setDate] =useState("");
  let updatestate=()=>{
    let all=JSON.parse(localStorage.getItem("data"));
    sc=[];
    for(let x=0;x<all.catagory.length;x++){
      sc.push( <Dropdown.Item eventKey={all.catagory[x]} >{all.catagory[x]}</Dropdown.Item>)
    }
    setShowCat(sc);
    showList=[];
    total1=0;
    for(let x=0;x<all.expense.length;x++){
      total1=total1+all.expense[x].expense;  
      showList.push(
          <tr>
        <td>{x + 1}</td>
        <td>{all.expense[x]._id}</td>
        <td>{all.expense[x].expense}</td>
          
       </tr>
        )
    }

    setList(showList)
    setTotal(total1);
  }


let addExp=()=>{
    if(expenses <=0)
        alert("expensis must be grater then 0 ")
     else if(category2=="")  {
      alert("Please Select Category ")
     }else if(date==""){
      alert("Please Select Date ")
     }else{
  
      
      axios({
        method: 'put',
        url: 'http://localhost:4000/addExpense',
        data: {
          email: all._id,
          date:date,
          expense:expenses,
          category:category2
        },
        headers:{ 
          token:localStorage.getItem("token")
        }
      }).then((res)=>{  
        console.log(res);
          let data=res.data;
         localStorage.setItem("data",JSON.stringify(data))
          updatestate();
          setExpenses(0);
          setCategor2("");
          setDate("");
      }).catch((e)=>{
        alert("Unable to expenses");
      })
      
     }   
}

  let addCat=()=>{
    if(category.length < 3)
        alert("Required more then 2 char");
     else{
      axios({
        method: 'put',
        url: 'http://localhost:4000/addcategory',
        data: {
          email: all._id,
          category:category
        },
        headers:{ 
          token:localStorage.getItem("token")
        }
      }).then((res)=>{  
          let data=res.data;
         localStorage.setItem("data",JSON.stringify(data))
          updatestate();
          setCategor("");
      }).catch((e)=>{
        alert("Unable to add Category");
      })

     }   
  }
  
  let catfilter=(e)=>{
    
   
    if(e==-1)
            updatestate();
    else{


    showList=[];
    total1=0;
    for(let x=0;x<all.expense.length;x++){
      if(all.expense[x]._id!=e)
          continue;
      total1=total1+all.expense[x].expense;  
      showList.push(
          <tr>
        <td>{x + 1}</td>
        <td>{all.expense[x]._id}</td>
        <td>{all.expense[x].expense}</td>
          
       </tr>
        )
    }

      setList(showList)
      setTotal(total1);
       }   
  }

  return (
        <div>
            <Container className="my-5">
                <h1>Expenses</h1>
                <Row style={{margin:"3%"}}>

                    <Col xs="5">
                    <strong>Total Expense :<span style={{color:"red"}}> RS {total}</span> </strong> 
                    <DropdownButton onSelect={(e)=>catfilter(e)}  title="Select Category">

                    <Dropdown.Item eventKey="-1" >None</Dropdown.Item>
                     {showCat}
                    
 
                </DropdownButton>  
                    
                    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Category</th>
      <th>Expense</th>
    </tr>
  </thead>
  <tbody>
   {list} 
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
                    <Button variant="secondary" onClick={addCat} >
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
    <Form.Control required value={date} onChange={(e)=>setDate(e.target.value)}  type="date" placeholder="Enter Date" />
    
  </Form.Group>

  <DropdownButton onSelect={(e)=>setCategor2(e)}  title="Select Category">
  
   {showCat}
 
  </DropdownButton>  
  <br />
  <Button variant="primary" onClick={addExp} >
    Add

  </Button>
        </Form>
  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

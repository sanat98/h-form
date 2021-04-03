import React,{Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './MyForm.css';
import { Link } from 'react-router-dom';

class MyForm extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            sDate:"",
            repeatType:"",
            shiftt:"",
            sTime:"",
            eTime:"",
            day1:"",
            day2:""
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangeAll=this.handleChangeAll.bind(this);
    }
   
    handleChangeAll=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // let formData=new FormData();
        // formData.append('sDate',this.)
        localStorage.setItem('sDate',this.state.sDate);
        localStorage.setItem('repeatType',this.state.repeatType);
        localStorage.setItem('shiftt',this.state.shiftt);
        localStorage.setItem('sTime',this.state.sTime);
        localStorage.setItem('eTime',this.state.eTime);
        localStorage.setItem('day1',this.state.day1);
        localStorage.setItem('day2',this.state.day2);
      

     }


    render()
    {
    return (
        <div>
            <Card>
                
                <CardBody>
                   <CardTitle tag="h3">SELECT START DATE AND SHIFT TIME</CardTitle>
                    {/* 
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
           <Form method="get"onSubmit={this.handleSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="sDate">Select Start Date</Label>
            <Input type="Date" name="sDate" id="sDate" required value={this.state.sDate} onChange={this.handleChangeAll} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="repeatType">Select repeat type</Label>
            <Input type="select"value={this.state.repeatType} onChange={this.handleChangeAll} name="repeatType" id="repeatType" required  >
                <option disabled>Select any one</option>
                <option hidden>daily</option>
                <option>daily</option>
                <option>weekly</option>
                <option>monthly</option>
                </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
      <Label for="shift">Select Shift</Label>
            <Input type="select"value={this.state.shiftt} onChange={this.handleChangeAll} name="shiftt" id="shift" required >
                <option  disabled>Select any one</option>
                <option hidden> Morning </option>
                <option>Morning Shift - 5am to 9am </option>
                
                </Input>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="sTime">Start time</Label>
            <Input type="time"value={this.state.sTime} onChange={this.handleChangeAll} name="sTime" id="sTime"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
          <Label for="eTime">End time</Label>
            <Input type="time" value={this.state.eTime} onChange={this.handleChangeAll}name="eTime" id="eTime"/>
          </FormGroup>
        </Col>
        
      </Row>
      <Row>
          <Col md={12}><Card>
          <CardTitle tag="h5">Please select days of the week</CardTitle>
              <CardBody>
      <FormGroup check inline className="days">
     <Input type="checkbox" id="day1" value={this.state.day1} onChange={this.handleChangeAll}name="day1" value="mon"/>
  <Label  for="day1"> Mon</Label>
 <Input type="checkbox" value={this.state.day2} onChange={this.handleChangeAll} id="day2" name="day2" value="tue"/>

  <Label position="bottom" for="day2"> Tue</Label>
  <Input type="checkbox" id="day3" name="day3" value="wed"/>
  <Label position="bottom" for="day3"> Wed</Label>
  <Input type="checkbox" id="day4" name="day4" value="thu"/>
  <Label position="bottom" for="day4"> Thu</Label>
  <Input type="checkbox" id="day5" name="day5" value="fri"/>
  <Label position="bottom" for="day5"> Fri</Label>
  <Input type="checkbox" id="day6" name="day6" value="sat"/>
  <Label position="bottom" for="day6"> Sat</Label>

      </FormGroup>
      </CardBody>
      </Card>
      </Col>
      
      </Row>
      <div className="weekdaysDiv">
      <Input type="radio" id="weekdays" name="weekdays" value="weekdays"/>  {/*//edit value to all weekdays */}
      <Label for="weekdays">Weekdays</Label>
      </div>
      <Row>
      
      <Button type="submit">Add +

      
      </Button>
     <Button style={{display:"",marginLeft:20,color:"white"}}><Link to="/Show" >show</Link></Button> 
      </Row>
    </Form>

                </CardBody>
            </Card>
        </div>
    )
}
    }
export default MyForm;

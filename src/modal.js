import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class ModalBook extends React.Component{


handleData=(event)=>{


    event.preventDefault();
    const {user}=this.props.auth0
    const obj={

        title:event.target.title.value,
        description:event.target.bookdisc.value,
        status:event.target.status.value,
        email:user.email
    }



    console.log(obj)
    axios
    .post('https://lab12work.herokuapp.com/addbook',obj)
    .then(result=>{
        this.props.newData(result.data)
    })   
}



    render(){

   

        return (
     
        <>
        <Modal show={this.props.show} onHide={this.props.closeShow}>
        <Modal.Header closeButton>
          <Modal.Title> Book Details  </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
      
                    <Form onSubmit={this.handleData}>
                     <Form.Group className="mb-3" controlId="formBasictext" >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Name" name="title" />
                   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Description </Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Description" name="bookdisc"/>
                   
                    </Form.Group>


                      <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select id="status" >
                    
                        <option value="Life Changing">Action and Adventure</option>
                        <option value="Classics">Classics</option>
                        <option value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        
                      </Form.Select>
                      </Form.Group>
                
                    <Button variant="primary" type="submit" onClick={this.props.closeShow}  >
                    Save!
                    </Button>
                   
            </Form>          
            
      </Modal.Body>
        
      </Modal>
    </>
        )
    }

}

export default withAuth0(ModalBook) ;
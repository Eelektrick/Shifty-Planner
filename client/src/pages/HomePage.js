import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import API from '../utils/API';
import moment from 'moment';
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";



function HomePage() {

    // constructor() {
    //     super();
        // this.state = {
        //     showModal: false,
        //     events: [],
            
        // }
        const [isOpen, setIsOpen] = useState(false);
        const [events, setEvents] = useState([]);
        const userId = "abc";
        const authID = 456;
    // }
    // const handleClose = () =>  setIsOpen(false);
    // const handleShow = () =>  setIsOpen(true);

    useEffect(() => { 

        API.getShiftByAuthId(authID).then( (data) => {
           console.log("Get data by Auth Id");
           console.log(data);
        })

        API.getShifts(userId).then((data) => {
        
            const e = [];
            for (var i = 0; i < data.data.length; i++) {

                if (data.data[i].traded === 2) {
                    e[i]
                        = {
                        'shift': data.data[i].shift,
                        'title': data.data[i].shift + "   " + data.data[i].name,
                        'start': data.data[i].start,
                        'end': data.data[i].end,
                        '_id': data.data[i]._id,
                        'authID': data.data[i].authID,
                        'name': data.data[i].name,
                        'traded': data.data[i].traded
                    }
                }
            }
           
            setEvents(e);
        })

    }, []);

    const handleDelete = (id) => {
       const newList = events.filter(e => (e._id!==id) )
        //    this.setState({...events, events: newList}) ;
        setEvents(newList)
           // Save this new list to DB or remove that particular Id details from db
           // After refresh all the removed items still exist
           API.saveID(id, userId).then ( (data) => {

           })
       }
    
     const MyModal = (props) => {
     
       return(
        <Modal 
          className="modal-container"
        //   show={isOpen}
        //   onHide={() => setIsOpen(false)}
        {...props}
       >
            <div>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
                </Button>
                </Modal.Footer> 
            </div>
        </Modal>
       )
       }

    return (
        <div>
            <Container>
            <Row>
                <Col size="md-12">
             <ol>
                Shifts that are ready for trade:
                {events.map(details => (
                <li key={details._id}>
                    <p>{details.name} on shift {details.shift}, timing between {moment(details.start).format('MMMM Do YYYY, h:mm:ss a')} and {moment(details.end).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    <button type="button" class="btn btn-dark mr-3" onClick= { () => setIsOpen(true) }  class="btn btn-dark mr-3">Accept</button> 
                  
                    <button type="button" onClick={() => handleDelete(details._id)}  class="btn btn-dark">Ignore</button>
               
                </li>
            ))}
             <MyModal
        show={isOpen}
        onHide={() => setIsOpen(false)}
      />
            </ol> 
                </Col>
            </Row>
            </Container>
        </div>

    )
    };



export default HomePage;
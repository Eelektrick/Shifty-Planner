import React, { Component } from 'react';
import { Button, ModalBody } from 'react-bootstrap'
import API from '../utils/API';
import moment from 'moment';
import Row from "../components/Row";
import Col from "../components/Col";
import Modal from "react-modal";
import Container from "../components/Container";

const userId = "abc";

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            events: [],
            
        }

    }
    handleClose = () => this.state.showModal(false);
    handleShow = () => this.state.showModal(true);

    componentDidMount() {

        // API.getShiftByAuthId('123').then( (data) => {
        //    console.log(data);
        // })

        API.getShifts(userId).then((data) => {
            console.log(data);
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
           
            this.setState({ events: e });
        })

    }

    handleDelete = (id) => {
       const newList = this.state.events.filter(e => (e._id!==id) )
           this.setState({...this.state.events, events: newList}) ;
           // Save this new list to DB or remove that particular Id details from db
           // After refresh all the removed items still exist
           API.saveID(id, userId).then ( (data) => {

           })
       }
    
     MyModal(props){
       return(
        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
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
        </Modal>
       )
       }

render() {

    return (
        <div>
            <Container>
            <Row>
                <Col size="md-12">
             <ol>
                Shifts that are ready for trade:
                {this.state.events.map(details => (
                <li key={details._id}>
                    <p>{details.name} on shift {details.shift}, timing between {moment(details.start).format('MMMM Do YYYY, h:mm:ss a')} and {moment(details.end).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    <button type="button" class="btn btn-dark mr-3">Accept</button>
                     {/* onClick=
                     {() =>  
                             expandable && this.setState({showModal : true}),
                            <Modal
                            show={this.state.showModal}
                            onHide={() => this.handleClose}
                        />
                 }  class="btn btn-dark mr-3">Accept</button>  */}

                    <button type="button" onClick={() => this.handleDelete(details._id)}  class="btn btn-dark">Ignore</button>
               
                </li>
            ))}
            </ol> 
                </Col>
            </Row>
            </Container>
        </div>

    )
    };

}

export default HomePage;
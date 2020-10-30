import React from "react";
import API from "../utils/API";
import { Button, Form } from "react-bootstrap";
import "./example.css";

function Gallery() {
  let id;

  API.getShifts().then((json) => {
    console.log(json);
    console.log(json.data[0]._id);
    id = '5f9a235460126d13f1846e62';
  });

  let shift = {
    crew: ["Sam", "Yakini", "Atima"],
    generated_ID: 123,
    date: "2020-10-26T15:08:40.745Z",
    hours: "0700-1900",
    traded: false,
    shift: "A",
  };

  function testsave() {
    API.saveShift(shift).catch((err) => console.log(err.response));
  }

  function testdelete() {
    API.deleteShift(id).catch((err) => console.log(err.response));
  }

  let updateShift ={
    
    //unique id for user
     authID: 456,
    //Email Id for user
     emailID: "abc@gmail.com",
    //A,B,C Custom
    shift: "A",
    //Start Date and Time
    start: 12345,
    //End Date and Time
    end: 12345,
    //Has this shift been traded
    traded: 1,
    //Who is on this shift
    name:"Wyatt",
};

  function testUpdateOne() {



    API.updateShift(id,updateShift).catch((err) => console.log(err.response));
    
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>

      <Button onClick={testsave}>Test Save</Button>
      <Button onClick={testdelete}>Test Delete</Button>
      <Button onClick={testUpdateOne}>Test Update</Button>

      {/* <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
    <option>A</option>
      <option>B</option>
      <option>C</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
    </div>
  );
}

export default Gallery;

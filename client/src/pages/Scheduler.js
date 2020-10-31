import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Calender from "../components/Calender";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import { useAuth0 } from "@auth0/auth0-react";

function Scheduler() {

  const { user } = useAuth0();
  console.log(user);
  // console.log(user.sub);
  const authID = (user || {}).sub;
  const nickname = (user || {}).nickname;

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    // loadUsers();
  }, []);

  return (
    <div>
    <Container>
      <Row>
        <Col size="md-12">
        {/* Pass props to the card container */}
       
        <Calender authID= {authID} nickname = {nickname} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Scheduler;

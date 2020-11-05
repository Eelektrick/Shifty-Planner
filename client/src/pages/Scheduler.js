import React, { useEffect } from "react";
import Calender from "../components/Calender";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import CardContainer from "../components/CardContainer";
import { useAuth0 } from "@auth0/auth0-react";

function Scheduler() {

  const { user } = useAuth0();
  // console.log(user);
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
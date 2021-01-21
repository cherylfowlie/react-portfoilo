import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Homepage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Cheryl Fowlie</h1>
        <p>
          Full Stack Student
  </p>
        <p>
          <Button variant="primary">Resume</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Homepage;

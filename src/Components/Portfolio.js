import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'


class Portfolio extends Component {
  render() {
    return (
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="../images/project2.png" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Second portfolio piece a booking system, worked on with @Mitchellcq @mylesburt @bevhatzl
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="../images/image1.png" />
            <Card.Body>
              <Card.Title>Code Quiz</Card.Title>
              <Card.Text>
                Code Quiz to show Javascript, HTML, CSS and local storage{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="../images/image2.png" />
            <Card.Body>
              <Card.Title>Event Planner</Card.Title>
              <Card.Text>
                First portfolio piece and event planner, worked on with @atifih, @noriyuki-ishii-820
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Row>

    );
  }
}

export default Portfolio;

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import classes from "./HomePageContent.module.css";

const HomePageContent = () => {
  return (
    <div>
      <header className={classes.header}>
        <Button variant="dark" className={classes.latestalbum}>
          Get our Latest Album
        </Button>
        <Button variant="dark" className={classes.playbtn}>
          &#9654;
        </Button>
      </header>
      <Container className={classes.container}>
      <h2>TOURS</h2>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">JUL 16</Col>
          <Col className="d-flex justify-content-center">DETROIT,MI</Col>
          <Col className="d-flex justify-content-center">
            DTE ENERGY MUSIC THEATRE
          </Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">JUL 19</Col>
          <Col className="d-flex justify-content-center">TORONTO,ON</Col>
          <Col className="d-flex justify-content-center">BUDWEISER STAGE</Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">JUL 22</Col>
          <Col className="d-flex justify-content-center">BRISTOW, VA</Col>
          <Col className="d-flex justify-content-center">JIGGY LUBE LIVE</Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">JUL 29</Col>
          <Col className="d-flex justify-content-center">PHOENIX, AZ</Col>
          <Col className="d-flex justify-content-center">AK-CHIN PAVILION</Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">AUG 2</Col>
          <Col className="d-flex justify-content-center">LAS VEGAS, NV</Col>
          <Col className="d-flex justify-content-center">T-MOBILE ARENA</Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
        <Row className="border-bottom border-dark p-2">
          <Col className="d-flex justify-content-center">AUG 7</Col>
          <Col className="d-flex justify-content-center">CONCORD, CA</Col>
          <Col className="d-flex justify-content-center">CONCORD PAVILION</Col>
          <Col className="d-flex justify-content-center">
            <Button>BUY TICKETS</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageContent;

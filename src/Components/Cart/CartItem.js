import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <span>{props.title}</span>
      </Col>
      <Col className="d-flex justify-content-center">
        <span>{`Rs.${props.price.toFixed(2)}`}</span>
      </Col>
      <Col className="d-flex justify-content-center">
        <span>{props.quantity}</span>
      </Col>
      <Col>
        <Button
          variant="danger"
          size="sm"
          className="m-1"
          onClick={props.onRemove}
        >
          REMOVE
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;

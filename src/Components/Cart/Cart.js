import React, { useContext } from "react";
import { Row, Col, Offcanvas, Container, Button } from "react-bootstrap";
import CartContext from "../../Context-store/cart-context";
import CartShowContext from "../../Context-store/Cart-Show/cartshow-context";

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartShowCtx = useContext(CartShowContext);
  const cartCtx = useContext(CartContext);

  const emptyItemsHandler = () => {
    cartCtx.items = [];
    cartCtx.totalAmount = 0;
  };
  return (
    <div>
      <Offcanvas show={cartShowCtx.cartOpen} onHide={cartShowCtx.hideCart} placement="end">
        <Offcanvas.Header className="d-flex justify-content-center" closeButton>
          <Offcanvas.Title className="d-flex fs-1">CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <Row className="d-flex justify-content-between fw-bold text-decoration-underline">
            <Col className="d-flex justify-content-center">
              <span>ITEM</span>
            </Col>
            <Col className="d-flex justify-content-center">
              <span>PRICE</span>
            </Col>
            <Col className="d-flex justify-content-center">
              <span>QUANTITY</span>
            </Col>
            <Col className="d-flex justify-content-center">
              <span> </span>
            </Col>
          </Row>
          {cartCtx.items.map((item) => (
            <Row key={item.title}>
              <Col className="d-flex justify-content-center">
                <span>{item.title}</span>
              </Col>
              <Col className="d-flex justify-content-center">
                <span>{item.price.toFixed(2)}</span>
              </Col>
              <Col className="d-flex justify-content-center">
                <span>{item.quantity}</span>
              </Col>
              <Col>
                <Button variant="dark" size="sm" className="m-1">
                  -
                </Button>
              </Col>
            </Row>
          ))}
          <Container className="d-flex justify-content-around p-4">
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount}</span>
          </Container>
          <button className={classes.button} onClick={emptyItemsHandler}>PURCHASE</button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { Row, Col, Offcanvas, Container } from "react-bootstrap";
import CartContext from "../../Context-store/cart-context";
import CartShowContext from "../../Context-store/Cart-Show/cartshow-context";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartShowCtx = useContext(CartShowContext);
  const cartCtx = useContext(CartContext);

  const emptyItemsHandler = () => {
    cartCtx.items = [];
    cartCtx.totalAmount = 0;
  };

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);
  };
  return (
    <div>
      <Offcanvas
        show={cartShowCtx.cartOpen}
        onHide={cartShowCtx.hideCart}
        placement="end"
      >
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
            <CartItem
              key={item.title}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onRemove={cartItemRemoveHandler.bind(null, item)}
            />
          ))}
          <Container className="d-flex justify-content-around p-4">
            <span>Total Amount</span>
            <span>{`Rs. ${cartCtx.totalAmount.toFixed(2)}`}</span>
          </Container>
          <button className={classes.button} onClick={emptyItemsHandler}>
            PURCHASE
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;

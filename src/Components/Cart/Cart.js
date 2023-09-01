import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Offcanvas, Container } from "react-bootstrap";
import CartContext from "../../Context-store/cart-context";
import CartShowContext from "../../Context-store/Cart-Show/cartshow-context";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import axios from 'axios';
import EmailContext from "../../Context-store/Auth-Context/email-context";

const Cart = (props) => {
  const cartShowCtx = useContext(CartShowContext);
  const cartCtx = useContext(CartContext);
  const emailCtx = useContext(EmailContext);
  const [crudItems, setCrudItems] = useState([]);


  useEffect(() => {
    axios.get(`https://crudcrud.com/api/9ad64d6494a94767867b8c5ffb2ec539/cart${emailCtx.email}`)
    .then(response => {
      setCrudItems(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [crudItems, emailCtx.email]);

  const emptyCartHandler = () => {
    cartCtx.removeAllItems();
    setCrudItems([]);
  };

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item);
    axios.delete(`https://crudcrud.com/api/9ad64d6494a94767867b8c5ffb2ec539/cart${emailCtx.email}/${item._id}`)
    .then(response => {
      console.log('Item deleted:', response.data);
    })
    .catch(error => {
      console.error("error deleting item:", error);
    })
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
          {crudItems.map((item) => (
            <CartItem
              key={item._id}
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
          <button className={classes.button} onClick={emptyCartHandler}>
            PURCHASE
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;

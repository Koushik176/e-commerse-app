import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import CartContext from "../../Context-store/cart-context";
import { Link } from "react-router-dom";
import EmailContext from "../../Context-store/Auth-Context/email-context";
import axios from "axios";
import AuthContext from "../../Context-store/Auth-Context/auth-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const emailCtx = useContext(EmailContext);

  const updatedEmail = emailCtx.email.replace(/[.@]/g, "");

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = 1;
    cartCtx.addItem({ ...props.item, quantity: quantity, id: props.title });
    const cartPrice = props.item.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
    const url = `https://crudcrud.com/Dashboard/3f8488f350d341918a1ba072eb79c6d0/cart${updatedEmail}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        ...props.item,
        quantity: quantity,
        id: props.title,
      }),
      headers: {
        "Access-Control-Allow-Headers": "Origin",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section>
      <Row className="p-2 mx-auto" style={{ width: 310 }}>
        <h4 className="p-3 d-flex justify-content-center">{props.title}</h4>
        <Link
          to={{
            pathname: `/products/${props.title}`,
            state: {
              title: props.title,
              price: props.price,
              imageUrl: props.imageUrl,
            },
          }}
        >
          <img
            className="p-1"
            src={props.imageUrl}
            alt="item-pictures"
            width="300"
            height="300"
          />
        </Link>
        <div className="d-flex justify-content-between">
          <span>{`Rs. ${props.price.toFixed(2)}`}</span>
          <Button variant="primary" onClick={addItemToCart}>
            ADD TO CART
          </Button>
        </div>
      </Row>
    </section>
  );
};

export default Item;

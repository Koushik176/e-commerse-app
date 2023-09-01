import React, { useContext } from "react";
import { Button, Row } from "react-bootstrap";
import CartContext from "../../Context-store/cart-context";
import { Link } from "react-router-dom";
import EmailContext from "../../Context-store/Auth-Context/email-context";
import axios from "axios";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const emailCtx = useContext(EmailContext);

  const addItemToCart = async (event) => {
    event.preventDefault();
    const quantity = 1;
    cartCtx.addItem({ ...props.item, quantity: quantity, id: props.title });
    const cartPrice = props.item.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
    try {
      const response = await axios.post(`https://crudcrud.com/api/9ad64d6494a94767867b8c5ffb2ec539/cart${emailCtx.email}`,
      {
        ...props.item,
        quantity: quantity,
        id: props.title,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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

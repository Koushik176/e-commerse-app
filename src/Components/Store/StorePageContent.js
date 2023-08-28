import React, { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import ItemPageContent from "./ItemPageContent";
import Cart from "../Cart/Cart";
import CartShowContext from "../../Context-store/Cart-Show/cartshow-context";

const Products = (props) => {
  const cartShowCtx = useContext(CartShowContext);

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <React.Fragment>
      {cartShowCtx.cartOpen && <Cart />}
      <Container>
        <Col>
          {productsArr.map((item) => (
            <ItemPageContent
              item={item}
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </Col>
      </Container>
    </React.Fragment>
  );
};

export default Products;

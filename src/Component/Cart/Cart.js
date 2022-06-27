import React, { useState } from "react";
import { cartStyle } from "./style";
import { useSelector } from "react-redux";
import { Typography, Button, Link, Tooltip } from "@material-ui/core";
import prodcutImage from "../../assets/images/dummy-image.jpg";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import Box from "@material-ui/core/Box";

const Cart = () => {
  const classes = cartStyle();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className={classes.cartWrapper}>
        <div className="container">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"

          >
            <Typography variant="h3">Cart page</Typography>
          </Box>
          <div className="cart-heading-block">
            <Typography variant="h2">My Shopping Bag {cart.quantity}</Typography>
            <div className="total-price">Total price: </div>
          </div>

          {cart.products.map((product, id) => (
          <div className="cart-list-wrapper" key={id}>
            <div className="cart-list-item">
              <div className="cart-item-img">
                <Link>
                  <img src={product.img} alt="dummy-image" />
                </Link>
              </div>
              <div className="cart-item-content">
                <div className="cart-item-top-content">
                  <div className="cart-item-left">
                    <p className="brand"></p>
                    <Link>{product.title}</Link>
                  </div>
                  <div className="price-block">
                    <span className="current-price">MRP &#8377; {product.price}</span>
                  </div>
                </div>
                <div className="cart-item-bottom-content">
                  <div className="qty-group">
                    <Button className="btn pink-btn" >
                      +
                    </Button>
                    <span className="number-count">1</span>
                    <Button className="btn pink-btn">
                      -
                    </Button>
                  </div>
                  <Link>Remove</Link>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Cart
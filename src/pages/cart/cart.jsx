import React, { useContext } from "react";
import { PRODUCTS } from "../../data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <React.Fragment>
      <h1 className="my-4">Your cart items</h1>
      <div className="row">
        {PRODUCTS.filter((p) =>
          cartItems.some((i) => i.id === p.id && i.count > 0),
        ).map((p) => (
          <Product key={p.id} data={p} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cart;

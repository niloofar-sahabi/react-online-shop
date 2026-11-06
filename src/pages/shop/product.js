import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <div className="col-3 mb-4">
      <div className="d-flex flex-column h-100 border-0">
        <img
          src={productImage}
          className="w-100 object-fit-contain"
          style={{ height: "180px" }}
        />
        <h5
          className="mt-2 mb-1"
          style={{ height: "45px", overflow: "hidden" }}
        >
          {" "}
          {productName}
        </h5>
        <p className="mb-3">price: {price}$</p>
        <div className="mt-auto">
          <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
            +
          </button>
          <span className="mx-1">
            {cartItems?.filter((row) => row.id === id)[0]?.count}
          </span>
          {isInCart && (
            <button
              className="btn btn-info btn-sm"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

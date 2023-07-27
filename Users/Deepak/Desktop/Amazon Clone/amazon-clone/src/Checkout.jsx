import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import {
  clearCart,
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "./redux/cartSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
import OrderNotification from "./OrderNotification";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const [orderNotification, setOrderNotification] = useState(false);

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    setOrderNotification(true);
    dispatch(clearCart());
  };
  return (
    <>
      {products.length === 0 && (
        <div className="mt-4  flex flex-col items-center mb-24">
          <img
            alt="empty-cart"
            className="h-44 mt-14"
            src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
          />
          <h1 className="font-bold text-2xl mt-14">Cart Empty</h1>
          <h2 className="mt-2 font-semibold text-2xl">
            You can go to{" "}
            <a href="/" className="font-bold text-orange-600">
              Products Page
            </a>{" "}
            to view more products.
          </h2>
        </div>
      )}
      {products.length > 0 && (
        <div className="h-screen bg-amazonclone-background">
          <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
            <div className="grid grid-cols-8 gap-10">
              {/* Products */}
              <div className="col-span-6 bg-white">
                <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
                {products.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                        <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                          <div className="col-span-2">
                            <Link to={`/product/${product.id}`}>
                              <img
                                className="p-4 m-auto"
                                src={product.image_small}
                                alt="Checkout product"
                              />
                            </Link>
                          </div>
                          <div className="col-span-6">
                            <div className="font-medium text-black mt-2">
                              <Link to={`/product/${product.id}`}>
                                <ProductDetails
                                  product={product}
                                  ratings={false}
                                />
                              </Link>
                            </div>
                            <div className="flex items-center">
                              <div className="grid grid-cols-3 w-20 text-center">
                                <div
                                  className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                  onClick={() =>
                                    dispatch(decrementInCart(product.id))
                                  }
                                >
                                  -
                                </div>
                                <div className="text-lg xl:text-xl bg-gray-200">
                                  {product.quantity}
                                </div>
                                <div
                                  className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                  onClick={() =>
                                    dispatch(incrementInCart(product.id))
                                  }
                                >
                                  +
                                </div>
                              </div>

                              <MdOutlineDeleteOutline
                                className="w-[29px] h-[50px]  cursor-pointer"
                                onClick={() =>
                                  dispatch(removeFromCart(product.id))
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                            ₹ {product.price }
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="text-lg xl:text-xl text-right mb-4 mr-4">
                  Subtotal ({itemsNumber} items):{" "}
                  <span className="font-semibold">₹ {subtotal.toFixed(2)}</span>
                </div>
              </div>
              {/* Checkout */}
              <div className="col-span-2 bg-white rounded h-[250px] p-7">
                <div className="text-xs xl:text-sm text-green-800 mb-2">
                  Your order qualifies for{" "}
                  <span className="font-bold">FREE DELIVERY</span>. Delivery
                  Details
                </div>
                <div className="text-base xl:text-lg mb-4">
                  Subtotal ({itemsNumber} items):{" "}
                  <span className="font-semibold">₹ {subtotal.toFixed(2)}</span>
                </div>
                <button
                  className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3"
                  onClick={() => handlePlaceOrder()}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {orderNotification && <OrderNotification />}
    </>
  );
};

export default Checkout;

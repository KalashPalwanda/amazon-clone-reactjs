import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div class="checkout__left">
        <img
          className="checkout__ad"
          src="https://res.cloudinary.com/hehe/image/upload/q_auto,f_auto,fl_lossy/v1575628360/multi-vendor/slider_images/Default/qxvqbphumkk5slcdq5vg.jpg"
          alt="checkout-banner"
        />

        {basket?.length === 0 ? (
            <h2>Your sopping Basket is empty</h2>
        ) : (
            <div>
            <h2>Your shopping cart</h2>
  
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

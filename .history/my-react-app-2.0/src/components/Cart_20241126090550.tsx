import React from "react";

interface props {
  cartItems: string[];
}

export const Cart = ({ cartItems }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;

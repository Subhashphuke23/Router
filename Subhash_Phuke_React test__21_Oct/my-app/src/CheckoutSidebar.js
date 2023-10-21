import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CheckoutSidebar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const checkout = () => {
   
    dispatch({ type: 'RESET_CART' });
    alert('Items have been checked out!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default CheckoutSidebar;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const removeFromCart = productId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const resetCart = () => {
    dispatch({ type: 'RESET_CART' });
    alert('Items have been checked out!');
  };

  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <div className="checkout-sidebar">
        <h3>Checkout Summary</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotalPrice()}</p>
        <button onClick={resetCart}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

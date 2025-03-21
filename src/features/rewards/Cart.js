import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './rewardsSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.rewards);

    const totalPoints = cart.reduce((acc, item) => acc + item.points, 0);

    return (
        <div className="cart">
            <h2>Reward Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.title} - <strong>{item.points} Points</strong>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total Points: {totalPoints}</strong></p>
                    <button className="checkout-btn" onClick={() => dispatch(clearCart())}>Redeem All</button>
                </>
            )}
        </div>
    );
};

export default Cart;

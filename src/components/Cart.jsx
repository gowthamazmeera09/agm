import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center pt-5">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className='text-center'>Your cart is empty</p>
            ) : (
                <div className="row">
                    {cartItems.map((product) => (
                        <div className="Cart-row" key={product.id}>
                            <div className='Cart-body'>
                                <div className='Cart-img mt-3 p-3 '>
                                    <img src={product.image} width="80px" />
                                </div>
                                <div className='Cart-title mt-5'>
                                    <b>{product.title.substring(0,10)}</b>
                                </div>
                                <div className='Cart-length mt-5'>
                                    <p>{product.length}</p>
                                </div>
                                <div className='Cart-price mt-5'>
                                    <b>{product.price}</b>
                                </div>
                                <button onClick={() => removeFromCart(product.id)} className="btn btn-outline-dark p-2">
                                        Remove
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;

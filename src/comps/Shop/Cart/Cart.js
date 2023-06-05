import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    const productPrice=cart.reduce((total,product)=>total+product.price,0)
    const shipping=(productPrice==0)?0:(productPrice>15)?4.99:12.00;
    const tax=productPrice/10;
    const total=productPrice+shipping+tax;
    return (
        <div className='Cart'>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Prices: $ {productPrice.toFixed(2)}</p>
            <p>Shipping Cost: $ {shipping.toFixed(2)}</p>
            <p><small>Tax+vat: $ {tax.toFixed(2)}</small></p>
            <p>Total Prices: $ {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
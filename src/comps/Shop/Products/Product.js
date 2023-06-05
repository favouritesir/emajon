import React from 'react';
import './Product.css'
import { FaBeer,FaShoppingCart } from "react-icons/fa";


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='Product'>
            <div className="Pimg">
                <img src={img} alt="" />
            </div>

            <div className="Pdes">
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left on the store</small></p>
                <button className='Cart' onClick={()=>props.handleAddProduct(props.product)}><FaShoppingCart /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;
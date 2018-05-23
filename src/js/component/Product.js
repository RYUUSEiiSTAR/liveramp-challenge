import React from 'react';

export default function Product(props) {
    return(
        <div className='product'>
            <img src={props.product.img} className='productImg' alt='Some healthy fruits :)'/>
            <p>{props.product.name}</p>
            <p className='price'>${props.product.price}</p> / g
        </div>
    )
}
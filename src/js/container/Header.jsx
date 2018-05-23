import React from 'react';
import StarRating from './../component/StarRating';

export default function Header(props) {
    let avgStars = 0;
    if (props.shop.reviews.length > 0) {
        avgStars = props.shop.reviews.reduce((acc, cur) => acc + cur.stars, 0) / props.shop.reviews.length;
    }
    
    return (
        <div className='headerFlex'>
            <span className='leftPanel'>
                <img src={props.shop.logo} className='logo' alt="Shop Logo"/>
            </span>
            <span className='rightPanel'>
                <h1>{props.shop.name}</h1>
                <StarRating stars={avgStars}/>
                <p>{props.shop.desc}</p>
            </span>
        </div>
    )
}
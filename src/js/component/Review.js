import React from 'react';
import StarRating from './StarRating';

export default function Review(props) {
    return(
        <div>
            <h4>{props.review.name}</h4>
            <p>{props.review.review}</p>
            <StarRating stars={props.review.stars}/>
            <br />
        </div>
    )
}
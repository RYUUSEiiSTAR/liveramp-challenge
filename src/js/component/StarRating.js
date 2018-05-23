import React from 'react';
import { Star } from 'react-feather';

export default function StarRating(props) {
    let roundedStars = Math.round(props.stars);
    let stars = [];
    for (let i = 0; i < 5; i++) {
        let className = i < roundedStars ? 'coloured' : '';
        stars.push(<Star key={i} className={className} />)
    }
    return(stars);
}
import React, { Component } from 'react';
import Slider from 'react-slick';

import Header from './js/container/Header';
import Tag from './js/component/Tag.js';
import Product from './js/component/Product.js';
import Review from './js/component/Review.js';

import GenerateTestData from './test/testData';
import DefaultShopLogo from './online-shop.png';
import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            logo: DefaultShopLogo,
            desc: '',
            special: [],
            products: [],
            reviews: []
        }
    }

    componentDidMount() {
        const test = GenerateTestData();
        this.setState(test);
    }
    
    render() {
        const style = {
            padding: '0 10vw'
        }

        let specialTags;
        if (this.state.special.length > 0) {
            specialTags = <div>
                <p>Search by: </p>
                {this.state.special.map((tag, idx) => <Tag key={idx} name={tag.name} />)}
            </div>
        } else {
            specialTags = <p className='emptyError'>{this.state.name} does not currently specialise in any items</p>;
        }

        let products;
        if (this.state.products.length > 0) {
            let slidesToShow = this.state.products.length > 2 ? 3 : this.state.products.length;
            const sliderSettings = {
                infinite: true,
                speed: 500,
                slidesToShow: slidesToShow,
                slidesToScroll: 1
            }

            products = <Slider {...sliderSettings}>
                {this.state.products.map((prd, idx) => <Product key={idx} product={prd}/>)}
            </Slider>
        } else {
            products = <p className='emptyError'>{this.state.name} currently has no items available for sale</p>;
        }

        let reviews;
        if (this.state.reviews.length > 0) {
            reviews = this.state.reviews.map((rvw, idx) => <Review key={idx} review={rvw}/>)
        } else {
            reviews = <p className='emptyError'>Be the first to review {this.state.name}!</p>;
        }
        
        return (
            <div style={style}>
                <Header shop={this.state} />

                <h2>Specialties</h2>
                {specialTags}
                <br />

                <h2>Products</h2>
                {products}
                <br />

                <h2>Reviews</h2>
                {reviews}
                <br />
            </div>
        );
    }
}
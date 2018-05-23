import gfycat from 'gfycat-style-urls';
import loremIpsum from 'lorem-ipsum';

import apple from './testImages/apple.png';
import banana from './testImages/banana.png';
import cherry from './testImages/cherry.png';
import grapes from './testImages/grapes.png';
import kiwi from './testImages/kiwi.png';
import lemon from './testImages/lemon.png';
import orange from './testImages/orange.png';
import pear from './testImages/pear.png';
import pineapple from './testImages/pineapple.png';
import pomegranate from './testImages/pomegranate.png';
import strawberry from './testImages/strawberry.png';
import watermelon from './testImages/watermelon.png';

const fruits = [
    apple, banana, cherry, grapes, kiwi, lemon, orange, pear, pineapple, pomegranate, strawberry, watermelon
];

export default function generateTestData() {
    const name = generateCombo(1);
    const desc = loremIpsum({
        count: 1,
        units: 'paragraphs',
        format: 'plain'
    });
    let special = [];
    for (let i = 0; i < randomInt(10); i++) {
        special.push({
            name: generateCombo(0),
        });
    }
    let products = [];
    for (let i = 0; i < randomInt(20); i++) {
        products.push({
            name: generateCombo(2),
            price: randomInt(100),
            img: fruits[randomInt(12)]
        });
    }
    let reviews = [];
    for (let i = 0; i < randomInt(12); i++) {
        reviews.push({
            name: generateCombo(2),
            stars: randomInt(6),
            review: loremIpsum({
                count: 1,
                units: 'paragraphs',
                format: 'plain',
                paragraphUpperBound: 2})
        });
    }

    return {
        name: name,
        desc: desc,
        special: special,
        products: products,
        reviews: reviews
    }
}

function generateCombo(adj) {
    return gfycat.generateCombination(adj, ' ').replace(/\w\S*/g, txt =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
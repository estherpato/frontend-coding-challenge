import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.js';

const phones = [
    {
        id: 1,
        name: 'iPhone Xs',
        image: 'http://www.elcolombiano.com/documents/10157/0/248x365/0c0/0d0/none/11101/CKMW/image_content_31809132_20180912191227.jpg', 
        title: 'Welcome to the big screens.',
        color: ['Silver', 'Space Grey', 'Gold'],
        price: '1.159 €'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S9',
        image: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/74/7a/43/4422260/1540-1/tsp20180719100632/Smartphone-Samsung-Galaxy-S9-Double-SIM-64-Go-Bleu.jpg',
        title: 'The revolutionary camera that adapts like human eye.',
        color: ['Lilac Purple', 'Midnight Black', 'Titanium Gray', 'Coral Blue', 'Sunrise Gold', 'Burgundy Red'],
        price: '849 €'
    },
    {
        id: 3,
        name: 'Huawei P20',
        image: 'https://i.blogs.es/137741/huawei-p20-pro-02/450_1000.jpg',
        title: 'A renaissance in photography is here.',
        color: ['Black', 'Midnight Blue', 'Pink Gold', 'Twilight'],
        price: '549 €'
    },
    {
        id: 4,
        name: 'Xiaomi Mi 8',
        image: 'https://cdn.shopify.com/s/files/1/2700/1230/products/6941059608837-1_1024x1024.jpg',
        title: '',
        color: ['Black', 'White', 'Blue', 'Gold'],
        price: '499 €'
    }
]

ReactDOM.render(
    <HashRouter>
        <App phoneList={phones}/>
    </HashRouter>,
    document.getElementById('root')
);
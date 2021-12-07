import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { productTitle, productPrice, productDesc, _id } = product;
    return (
        <Col xs={12} md={4}>
            <div className="product">
                <h4 className="my-2">Name: {productTitle}</h4>
                <h6>Price: {productPrice}</h6>
                <h6>{productDesc}</h6>
                <Link to={`/product/details/${_id}`}><button className="btn-details">Details</button></Link>

            </div>
        </Col>
    );
};

export default Product;
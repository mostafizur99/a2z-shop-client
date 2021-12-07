import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from './Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="products-section">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12}>
                        <div className="employees-heading">
                            <h2>All Products</h2>
                            <h4>Total Products: {products.length}</h4>
                        </div>
                    </Col>
                </Row>
                {
                    <Row className="align-items-center">
                        {
                            products.map(product =>
                                <Product
                                    key={product._id}
                                    product={product}>
                                </Product>)
                        }
                    </Row>
                }
            </Container>
        </div>
    );
};

export default Products;
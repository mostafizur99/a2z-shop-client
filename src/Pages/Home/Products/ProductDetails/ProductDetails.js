import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import NavigationBar from '../../../Shared/NavigationBar/NavigationBar';
import './ProductDetails.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    let { detailId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/product/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="product-details">
                <Container>
                    <Row>
                        <Col md={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Title: {product.productTitle}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{product.productDesc}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Price: {product.productPrice}</Card.Subtitle>
                                    <Card.Text>
                                        {product.productDetails}
                                    </Card.Text>
                                    <Link to={'/home'}><button className="btn-update">&#11013; Go Home</button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ProductDetails;
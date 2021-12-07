import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavigationBar from '../../../../Shared/NavigationBar/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    let { updateId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/product/${updateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    // Update Product 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...product };
        newProductData[field] = value;
        setProduct(newProductData);
    }

    const handleUpdateSubmit = e => {
        const url = `http://localhost:5000/product/${updateId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Update Successful');

                }
            })
        e.preventDefault();
    }

    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="update-section">
                <Container>
                    <Row>
                        <Col md={12} >
                            <h2 className="my-3">Update</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >
                            <div className="update-form-wrap">
                                <div className="update-form">
                                    <form onSubmit={handleUpdateSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="title">Product Title</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="productTitle"
                                                id="title" aria-describedby="titleHelp" value={product.productTitle || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price">Price</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="productPrice"
                                                id="price" aria-describedby="priceHelp" value={product.productPrice || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="desc">Sub Title</label>
                                            <input type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="productDesc"
                                                id="desc" aria-describedby="descHelp" value={product.productDesc || ''} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="fullDesc">Description</label>
                                            <textarea type="text"
                                                onChange={handleOnBlur}
                                                className="form-control"
                                                name="productDetails"
                                                id="fullDesc" aria-describedby="fullDescHelp" rows="4" cols="50" value={product.productDetails || ''} />
                                        </div>
                                        <button type="submit" className="btn-update my-2">Update</button>
                                    </form>
                                </div>
                            </div>

                            <Link to={'/dashboard'}><button className="btn-update">&#11013; Go Back</button></Link>

                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default UpdateProduct;
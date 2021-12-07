import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
    const titleRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const detailsRef = useRef();


    const handleAddProduct = e => {
        const productTitle = titleRef.current.value;
        const productPrice = priceRef.current.value;
        const productDesc = descRef.current.value;
        const productDetails = detailsRef.current.value;

        const newProduct = { productTitle, productPrice, productDesc, productDetails };

        // POST product data 
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('Successfully added a Product.')
                    e.target.reset();

                }
            });

        e.preventDefault();
    }

    return (
        <div className="add-product">
            <Row>
                <Col md={12}>
                    <h2 className="mb-3">Please add A Product</h2>
                </Col>
            </Row>

            <Row>
                <Col md={12} >
                    <div className="update-form-wrap">
                        <div className="update-form">

                            <form onSubmit={handleAddProduct}>
                                <div className="mb-2">
                                    <label htmlFor="title">Product Title</label>
                                    <input ref={titleRef} type="text" className="form-control" name="title" id="title" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="price">Product Price</label>
                                    <input ref={priceRef} type="number" className="form-control" name="price" id="price" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="desc">Product Description</label>
                                    <input ref={descRef} type="text" className="form-control" name="desc" id="desc" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="details">Product Description</label>
                                    <textarea ref={detailsRef} type="text" className="form-control" name="details" id="details" rows="4" cols="50" />
                                </div>
                                <div className="mb-2">
                                    <input className="btn-update" type="submit" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>


                </Col>
            </Row>
        </div>
    );
};

export default AddProduct;
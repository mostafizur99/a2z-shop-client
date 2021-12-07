import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    // All employee data 
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [isDeleted]);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete Product Data?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingEmployees = products.filter(product => product._id == id);
                        setProducts(remainingEmployees);
                        setIsDeleted(true);
                    } else {
                        setIsDeleted(false);
                    }
                })
        }
    }


    return (
        <div className="manage-employees">
            <Row>
                <Col md={12}>
                    <h2>Manage Product data</h2>
                    <h5 className="my-3">Total: {products.length}</h5>
                </Col>
            </Row>
            <div className="employees-wrap">
                <Row>
                    {
                        products.map(product =>
                            <Col md={4} key={product._id} >
                                <div className="single-manage">
                                    <h4>Name: {product.productTitle}</h4>
                                    <h5>Email: {product.productPrice}</h5>
                                    <h5>Age: {product.productDesc}</h5>
                                    <div className="action">
                                        <Link to={`/product/update/${product._id}`}><button className="btn-update">Update</button></Link>
                                        <button onClick={() => handleDeleteProduct(product._id)} className="btn-detele">Delete</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default ManageProducts;
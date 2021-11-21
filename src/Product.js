import React, { Component } from 'react';
import Nav from './Nav';
import './index.css'
function Product(props) {
    return (
        <>
            <a href="#">
                <div className="container">
                    <div className="Product">
                        <img src={props.image} className="images" /><br/><br/>
                        <h1 className="productName">{props.name}</h1>
                        <p>{props.desc}</p>
                        <h3>{props.price} Rs</h3>

                    </div>
                </div>
            </a>
        </>
    )
}
export default Product
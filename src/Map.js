import React, { Component } from 'react';
import Product from './Product'
import Nav from './Nav';
import list from './list';

function product(cvalue) {
    console.log(cvalue)
    return (
        <Product
            name={cvalue.name}
            image={cvalue.image}
            desc={cvalue.desc}
            price={cvalue.price}
        />
    )

}
function Map() {
    return (
        <>
            <Nav />
            <br /><br /><br />
            {list.map(product)}
        </>
    )
}
export default Map
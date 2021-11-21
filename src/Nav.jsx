import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

function Nav(){
    return (
        <>
            <div className="nav">
                <h1 className="CompanyName">testing</h1>
                <ul>
                    <li><NavLink to='/' className='a'>Home</NavLink></li>
                    <li><NavLink to='/Signin' className='a'>Signin</NavLink></li>
                    <li><NavLink to='/Aboutus' className='a'>Aboutus</NavLink></li>
                    <li><NavLink to='/Product' className='a'>Product</NavLink></li>
                </ul>
            </div>
        </>
    )
}
export default Nav

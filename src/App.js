import React, { Component } from 'react';

import {Switch,Route} from 'react-router-dom'

import Home from './Home';
import Signin from './Signin'
import Aboutus from './Aboutus'
import Product from './Product';
import Map from './Map';

function App(){
    return( 
        <>
     <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/aboutus' component={Aboutus}/>
         <Route exact path='/signin' component={Signin}/>
         <Route exact path='/Product' component={Map}/>
         <Route component={Error}/>
     </Switch>
        </>
    )
}
export default App

import React, {useState, useEffect}  from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './login';

const PrivateRoute =(props)=> {

    const {path, component:Component} = props;
    let user = localStorage.getItem('user');

    // console.log(user);
    if(user)
    {
        return <Route exact path={path} component={Component}/>
    }
    else
    {
        return <Login {...props} />
    }
    }

export default PrivateRoute;
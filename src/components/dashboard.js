import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import '../sass/dashboard.scss';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import ConditionalRend from './conditionalRend';
import Hook from './hook';
import Ref from './ref';

const Dashboard =()=>{
    const history = useHistory();

    let {path, url} = useRouteMatch();

        return(
            <Router>
            <div className='dashboard'>
                <div className='dashboard__head'>
                <h1 style={{color:'white'}}>dashboard</h1>
                <input className='dashboard__btn' type ='button' value='logout' onClick={()=>history.push('/login')}/>
                </div>
                
            <nav className='dashboard__nav'>
                <ul>
                    <li className='dashboard__list'>
                        <NavLink exact to={`${url}/hook`} activeClassName='active' className='link1'>hook</NavLink>
                    </li>
                    <li className='dashboard__list'>
                        <NavLink  to={`${url}/refs`}  className='link1'>Refs</NavLink>
                    </li>
                    <li className='dashboard__list'>
                        <NavLink  to={`${url}/conditionalRendering`} className='link1'>Conditional Reandering</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path={`${path}/conditionalRendering`}>
                    <ConditionalRend></ConditionalRend>
                </Route>
                <Route path={`${path}/refs`}>
                    <Ref></Ref>
                </Route>
                <Route path={`${path}/hook`}>
                    <Hook></Hook>
                </Route>
            </Switch>

                
            </div>
            </Router>
        )
    }


export default Dashboard;
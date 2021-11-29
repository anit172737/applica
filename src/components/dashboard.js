import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import '../sass/dashboard.scss';
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import ConditionalRend from './conditionalRend';
import Hook from './hook';
import Ref from './ref';
import ApiIntegration from './apiIntegration';
import Home from './home';
import Chart from './chart';
import LifeCycle from './lifeCycle';

const Dashboard =()=>{
    const history = useHistory();

    let {path, url} = useRouteMatch();

        return(
            <Router>
            <div className='dashboard'>
                <div className='dashboard__head'>
                <h1>taskbook</h1>
                <input className='dashboard__btn' type ='button' value='logout' onClick={()=>history.push('/login')}/>
                </div>
                
            <nav className='dashboard__nav'>
                <ul className='dashboard__nav-ul'>
                <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/home`}
                         activeClassName='dashboard__nav-link-active' 
                         className='dashboard__nav-link'>Home</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/conditionalRendering`}
                         activeClassName='dashboard__nav-link-active' 
                         className='dashboard__nav-link'>Conditional rendering</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/lifeCycle`}
                         activeClassName='dashboard__nav-link-active' 
                         className='dashboard__nav-link'>Class Life Cycle</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/apiIntegration`}
                         activeClassName='dashboard__nav-link-active' 
                         className='dashboard__nav-link'>Api Integration</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/chart`}
                         activeClassName='dashboard__nav-link-active' 
                         className='dashboard__nav-link'>Chart</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink exact to={`${url}/hook/userProfile`} 
                        activeClassName='dashboard__nav-link-active' 
                        className='dashboard__nav-link dashboard__nav-link1'>hooks</NavLink>
                    </li>
                    <li className='dashboard__nav-list'>
                        <NavLink  to={`${url}/refs`} 
                        activeClassName='dashboard__nav-link-active'  
                        className='dashboard__nav-link'>Refs</NavLink>
                    </li>
                    
                    
                </ul>
            </nav>

            <Switch>
                <Route path={`${path}/home`}>
                    <Home></Home>
                </Route>
                <Route path={`${path}/conditionalRendering`}>
                    <ConditionalRend></ConditionalRend>
                </Route>
                <Route path={`${path}/refs`}>
                    <Ref></Ref>
                </Route>
                <Route path={`${path}/hook`}>
                    <Hook></Hook>
                </Route>
                <Route path={`${path}/apiIntegration`}>
                    <ApiIntegration></ApiIntegration>
                </Route>
                <Route path={`${path}/chart`}>
                    <Chart></Chart>
                </Route>
                <Route path={`${path}/lifeCycle`}>
                    <LifeCycle fav={'yellow'}/>
                </Route>
            </Switch>

                
            </div>
            </Router>
        )
    }


export default Dashboard;
// import {useFormik} from 'formik';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import '../sass/hook.scss';
import { useRouteMatch } from 'react-router';
import UserProfile from './userProfile';
import UserSettings from './userSettings';

const Hook =()=> {
    // const history = useHistory();
    let {path, url} = useRouteMatch()
    
        return (
            <Router>
                <div className="hook">
                    <nav className='hook__nav'>
                    <ul className='hook__ul'>
                    <li className='hook__ul-list'>
                        <NavLink exact to={`${url}/userProfile`} 
                        activeClassName='hook__ul-list-active' 
                        className='hook__ul-list-link1'>userProfile</NavLink>
                    </li>
                    <li className='hook__ul-list'>
                        <NavLink exact  to={`${url}/userSettings`} 
                        activeClassName='hook__ul-list-active'  
                        className='hook__ul-list-link1'>userSettings</NavLink>
                    </li>
                   
                    </ul>
                </nav>

            <Switch>
                <Route path={`${path}/userProfile`}>
                    <UserProfile></UserProfile>
                </Route>
                <Route path={`${path}/userSettings`}>
                    <UserSettings></UserSettings>
                </Route>
                </Switch>
            </div>
            </Router>
        );
    }

export default Hook;
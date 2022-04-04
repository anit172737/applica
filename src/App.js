// import React, { useEffect, useState } from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import axios  from 'axios';
import './sass/_base.scss';
import './sass/App.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup'; 
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import PrivateRoute from './components/private';
const Signup = lazy(()=>import('./components/signup'))

const App =()=> {

  // const [users, setUsers] = useState([]);
  // const [errors, setErrors] = useState('');
  // const [logged, setLogged] = useState(false);
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState('')
  
  // const apiEndpoints = `http://localhost:8080/api/applicants`;
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repassword:'',
      loginMail:'',
      loginPass:''

    },
    // validate,
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('This field is required'),
      email: Yup.string().email('Invalid email address').required('This field is required'),
      password: Yup.string()
    // .max(8, 'Must be 8 characters')
    // .min(8, 'Must be 8 characters')
    .required('This field is required')
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,8}$/, 
    'Must be 8 characters, atleast one (number, uppercase, lowercase and symbol).')
    ,
    repassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
    
    }),
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({values:''});
    const {firstName, lastName, email, password} = formik.values;
    // const allUsers = users.map(e => e.email);
    // const curUser = formik.values.email;
    // const handlePost = async ()=>{
    //   const {data:post} = await axios.get(`http://localhost:8080/api/applicants`)
    // }
    axios.post(`http://localhost:8080/api/applicants`,{firstName, lastName, email, password} );
    // if(allUsers.includes(curUser)){
    //   alert(`email-id already exist, please provide another email-id`)
    // }else{
    //   fetch(`http://localhost:8080/api/applicants`,{
    //     method:'post',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({firstName, lastName, email, password})
    //   })
    //  alert('user registration successful!')
    // setSigned(true)
    // }

    localStorage.setItem('username', values.firstName)
    localStorage.setItem('email' , values.email)
    localStorage.setItem('pass', values.password)
    alert('user registration successfull!')
    setSigned(true)
    
    },
  });

  // const handleFetch= async()=>{
    
  //     fetch(`http://localhost:8080/api/applicants`)
  //     .then(res => res.json())
  //     .then(data  => setUsers(data))
  //     .then(error => setErrors(error))

  // const {data:post} = await axios.get(apiEndpoints)
  // setUsers(post);
    
  // }

  
   useEffect(()=>{
  //   handleFetch();
    setUser(localStorage.getItem('user'))
   }, []);

// const handleLog = ()=>{
//   // const allUsers = users.map(e => e.email);
//   // const curUser = formik.values.email;
//   // const curUserPass = formik.values.password;

//   alert('user login successful!')
//   setLogged(true)
// }

    return (
      <Router>
      <div className="App">
        <nav className='nav'>
        <ul style={{listStyleType:'none'}}>
          <li className='list'>
            <NavLink exact to='/' activeClassName='active' className='link'>Login</NavLink>
          </li>
          <li className='list'>
            <NavLink exact  to='/signup'  className='link'>Signup</NavLink>
          </li>
          <li className='list'>
            <NavLink exact  to='/dashboard' className='link'>Dashboard</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        {/* <PrivateRoute exact path='/dashboard' component={Dashboard}/> */}
        
        <Route path='/dashboard'>
          <ErrorBoundary>
          {user ? <Dashboard/> :
          <Redirect to= '/' />}
          </ErrorBoundary>
        </Route>
        <Route exact path='/signup'>
          <ErrorBoundary>
          {/* {signed ? <Redirect to='/' />
          : */}
        <Suspense fallback={<div>Loading...</div>}>
        <Signup 
        toChange={formik.handleChange} 
        submit={formik.handleSubmit} 
        errors = {formik.errors}
        onBlur = {formik.handleBlur}
        values = {formik.values}
        touched = {formik.touched}  
        ></Signup>
        </Suspense>
        {/* } */}
        </ErrorBoundary>
        </Route>
        <Route path='/'>
          <ErrorBoundary>
          <Login></Login>
          </ErrorBoundary>
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }

export default App;

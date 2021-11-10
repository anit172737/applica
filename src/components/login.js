import React, { useState } from 'react';
import '../sass/signup.scss';
import img1 from '../img/1.png';
import {useFormik} from 'formik';
import * as Yup from 'yup'; 

const Login =(props)=>{
    // change=(e)=>{
    //     const nam = e.target.name;
    //     const val = e.target.value;
    //     this.props.toChange(nam, val);

    // }
    const {onSubmit} = props;
    const formik = useFormik({
        initialValues: {
          
          loginMail:'',
          loginPass:''
    
        },
        // validate,
        validationSchema: Yup.object().shape({
          
        loginMail: Yup.string().email('Invalid email address').required('This field is required'),
        loginPass: Yup.string()
        .required('This field is required')
        }),
        onSubmit: (values, {resetForm}) => {
          console.log(values);
          resetForm({values:''});
        // const {firstName, lastName, email, password} = formik.values;
        // const allUsers = users.map(e => e.email);
        // const curUser = formik.values.email;
        // const handlePost = async ()=>{
        //   const {data:post} = await axios.get(`http://localhost:8080/api/applicants`)
        // }
    
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
         
        // }
        alert('user login successful!')
        },
      });
    

    
        return(
            <div className='form'>
                <div className='form__left'>
                    <img className='form__left-img' src={img1} alt='login-img'></img>
                </div>

                <div className='form__right'>
                <form className='form__right-sec' onSubmit={onSubmit}>
                    <h1 className='form__right-heading'>Login</h1>
                    <div>
                    <input 
                    className='form__right-input' 
                    type='email' 
                    name='loginMail' 
                    onChange={formik.handleChange} 
                    placeholder='Enter email' 
                    value={formik.values.loginMail}
                    onBlur = {formik.handleBlur}
                    autoFocus/>
                    {formik.touched.loginMail && formik.errors.loginMail ? <div className='form__right-label'>{formik.errors.loginMail}</div> : null}
                    </div>
                    <div>
                    <input 
                    className='form__right-input' 
                    type='password' 
                    name='loginPass' 
                    onChange={formik.handleChange} 
                    placeholder='Enter password' 
                    value={formik.values.loginPass}
                    onBlur = {formik.handleBlur}
                    />
                    {formik.touched.loginPass && formik.errors.loginPass ? <div className='form__right-label'>{formik.errors.loginPass}</div> : null}
                    </div>
                    <input 
                    className='form__right-btn' 
                    type='submit' 
                    value='Login'/>
                </form>
                </div>
            
            </div>
            
        )
    }


export default Login;
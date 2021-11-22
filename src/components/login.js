import React, { useEffect, useState } from 'react';
import '../sass/signup.scss';
import img1 from '../img/1.png';
import {useFormik} from 'formik';
import * as Yup from 'yup'; 
import { useHistory } from 'react-router';

const Login =(props)=>{
    // change=(e)=>{
    //     const nam = e.target.name;
    //     const val = e.target.value;
    //     this.props.toChange(nam, val);

    // }
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const history = useHistory();
    // const {onSubmit} = props;

    useEffect(()=>{
      setEmail(localStorage.getItem('email'))
      setPass(localStorage.getItem('pass'))
    }, [])
    
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

        
        if(values.loginMail === email && values.loginPass === pass){
          localStorage.setItem('user', email)
          console.log("working")
          history.push('/dashboard/home');
        }else if(values.loginMail !== email){
          alert('incorrect email ID!')
        }else if(values.loginPass !== pass){
          alert('incorrect password!')
        }else{
          alert('user is not authorized!')
        }
        
        },
      });
    

    
        return(
            <div className='form'>
                <div className='form__left'>
                    <img className='form__left-img' src={img1} alt='login-img'></img>
                </div>

                <div className='form__right'>
                <form className='form__right-sec' onSubmit={formik.handleSubmit}>
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
                    />
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
                    <div style={{display:'grid', justifyContent:'center'}}>
                    <div style={{color:'#2f2e47'}}>Not a member? <span><button 
                    className='form__sign-btn'
                    onClick={()=> history.push('/')}>SignUp</button></span>
                    
                    </div></div>
                </form>
                </div>
            
            </div>
            
        )
    }


export default Login;
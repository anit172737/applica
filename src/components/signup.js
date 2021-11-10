import React from 'react';
import '../sass/signup.scss';
import img2 from '../img/2.png';
import propTypes from 'prop-types';


const Signup = (props) =>{

    // change = (e) =>{
    //     const nam = e.target.name;
    //     const val = e.target.value;
    //     this.props.toChange(nam, val);
    // };
    
    const{toChange, onBlur, values, submit, errors, touched} = props;
    
        return(
            <div className='form'>
                <div className='form__left'>
                    <img className='form__left-img' src={img2} alt='signup-img'></img>
                </div>
                <div className='form__right'>
                <form className='form__right-sec' onSubmit={submit}>
                <h2 className='form__right-heading'>Welcome</h2>
                <div>
                <input 
                className='form__right-input' 
                type='text' 
                name='firstName' 
                onChange={toChange} 
                placeholder='Enter firstname' 
                value={values.firstName}
                onBlur = {onBlur}
                autoFocus />
                {touched.firstName && errors.firstName ? <div className='form__right-label'>{errors.firstName}</div> : null}
                </div>
                <div>
                <input 
                className='form__right-input' 
                type='text' 
                name='lastName' 
                onChange={toChange} 
                placeholder='Enter lastname'
                value={values.lastName}
                onBlur={onBlur}
                />
                {touched.lastName && errors.lastName ? <div className='form__right-label'>{errors.lastName}</div> : null}
                </div>
                <div>
                <input 
                className='form__right-input' 
                type='email' 
                name='email' 
                onChange={toChange} 
                placeholder='Enter email-id' 
                value={values.email}
                onBlur={onBlur}
                />
                {touched.email && errors.email ? <div className='form__right-label'>{errors.email}</div> : null}
                </div>
                <div>
                <input 
                className='form__right-input' 
                type='password' 
                name='password' 
                onChange={toChange} 
                placeholder='Enter password' 
                // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\]^_).{8,}' 
                value={values.password}
                onBlur={onBlur}
                />
                {touched.password && errors.password ? <div className='form__right-label'>{errors.password}</div> : null}
                </div>
                <div>
                <input 
                className='form__right-input' 
                type='password' 
                name='repassword' 
                onChange={toChange} 
                onBlur={onBlur} 
                placeholder='Re-enter password' 
                value={values.repassword}
                />
                {touched.repassword && errors.repassword ? <div className='form__right-label'>{errors.repassword}</div> : null}
                </div>
                <input className='form__right-btn' 
                type='submit' 
                value='SignUp'></input>
                </form>
                </div>
            </div>
            
        )
    }

    Signup.propTypes = {
        firstName : propTypes.string,
        lastName : propTypes.string,
        email : propTypes.string,
        password : propTypes.string,
        repassword : propTypes.string
    }

export default Signup;
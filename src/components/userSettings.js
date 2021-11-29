import React, { useEffect } from 'react';
import '../sass/userSettings.scss'
import {useFormik} from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router';

const UserSettings =()=> {
    const [detail, setDetail] = useState([])
    const [user, setUser] = useState('')
    const curUser = detail.filter(e => e.email === user);
    const userAddress = curUser.map(e=> e.address)
    const userJob = curUser.map(e=> e.jobProfile)
    const [change, setChange] = useState(false)
    const history = useHistory()

    const handleGet = async () =>{
        const {data:get} = await axios.get(`http://localhost:8080/api/applicants`)
        setDetail(get);
        
    }

    useEffect(()=>{
        setUser(localStorage.getItem('user'))
        handleGet()
        console.log(detail);
    },[change])

    const formik = useFormik({
        initialValues: {
          
            jobProfile:userJob.toString(),
            address: userAddress.toString(),
        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({ 
        // mail: Yup.string().email('Invalid email address').required('This field is required'),
        jobProfile: Yup.string()
        .required('This field is required'),
        address: Yup.string()
        .max(150)
        .required('This field is required'),
        }),
        onSubmit: (values, {resetForm}) => {
          
          console.log(values);
          resetForm({values:''});
          const {jobProfile, address} = formik.values;
          axios.put(`http://localhost:8080/api/applicants/${user}`,{jobProfile, address})
          setChange(!change)
          history.push('/dashboard/hook/userProfile')
        },
      });

    
        return (
            <form className='userForm' onSubmit={formik.handleSubmit}>
                {/* <div>
                    <input 
                    className='userForm__input' 
                    type='email' 
                    name='mail' 
                    onChange={formik.handleChange} 
                    placeholder='Enter email' 
                    value={formik.values.mail}
                    onBlur = {formik.handleBlur}
                    autoFocus/>
                    {formik.touched.mail && formik.errors.mail ? <div className='userForm__label'>{formik.errors.mail}</div> : null}
                    </div> */}
                    <div>
                    <input 
                    className='userForm__input' 
                    type='text' 
                    name='jobProfile' 
                    onChange={formik.handleChange} 
                    placeholder='Enter job profile' 
                    value={formik.values.jobProfile}
                    onBlur = {formik.handleBlur}
                    />
                    {formik.touched.jobProfile && formik.errors.jobProfile ? <div className='userForm__label'>{formik.errors.jobProfile}</div> : null}
                    </div>
                    <div>
                    <textarea 
                    className='userForm__input' 
                    type='text' 
                    name='address' 
                    onChange={formik.handleChange} 
                    placeholder='Enter address' 
                    value={formik.values.address}
                    onBlur = {formik.handleBlur}
                    />
                    {formik.touched.address && formik.errors.address ? <div className='userForm__label'>{formik.errors.address}</div> : null}
                    </div>
                    {userJob === null && userAddress === null ?
                    <input 
                    className='userForm__btn' 
                    type='submit' 
                    value='Add'/> :  <input 
                    className='userForm__btn' 
                    type='submit' 
                    value='Update'/>
                    }
                    

            </form>
        );
    }

export default UserSettings;
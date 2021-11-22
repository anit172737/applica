import React, { useEffect, useState } from 'react';
import '../sass/userProfile.scss';
import img from '../img/ProfilePic.png'
import axios from 'axios';

const UserProfile =()=> {
    const [detail, setDetail] = useState([])
    
    const [user, setUser] = useState('')
    const curUser = detail.filter(e => e.email === user);
    console.log(curUser);
    useEffect(()=>{
        setUser(localStorage.getItem('user'))
        console.log(user);
    })

    const handleGet = async () =>{
        const {data:get} = await axios.get(`http://localhost:8080/api/applicants`)
        setDetail(get);
    }

    useEffect(()=>{
        handleGet()
        console.log(detail);
    },[])
    
        return (
            <div className='user'>
                <div className='user__img'>
                <img className='user__img-pic' src={img} alt='profilePic'/>
                </div>
                {curUser.map(e=>
                    <div className='user__detail'>
                    <div><span style={{fontWeight:'bolder'}}>Email ID : </span><span style={{textTransform:'lowercase'}}>{e.email}</span></div>
                    <div><span style={{fontWeight:'bolder'}}>Job Profile : </span>{e.jobProfile}</div>
                    <div><span style={{fontWeight:'bolder'}}>Address : </span>{e.address}</div>
                </div>)}
                    
            </div>
        );
    }

export default UserProfile;
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import '../sass/conditional.scss';

const Home = () => {
const [user, setUser] = useState('')
    
useEffect(()=>{
    setUser(localStorage.getItem('username'))
},[])
        
        return (
            <div className='conditional'>
                <h1>Welcome to Taskbook {user}</h1>
            </div>
        );
    }


export default Home;
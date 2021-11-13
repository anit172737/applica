import React, { useState } from 'react';
import '../sass/conditional.scss';
import bulbOff from '../img/bulbOff.png';
import bulbOn from '../img/bulbOn.png';

const ConditionalRend = () => {

    const [click, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(!click);
    }

        return (
            <div className='conditional'>
                <div className = 'conditional__text'>{click ? 
                <img className='conditional__img'  src={bulbOn} alt='bulbOn'></img> : 
                <img className='conditional__img' src={bulbOff} alt='bulbOff'></img>}</div>
                <button className='conditional__btn' type='button' onClick={handleClick}>{click ? 'OFF' : 'ON'}</button>
            </div>
        );
    }

export default ConditionalRend;
import React, { useRef } from 'react';
import '../sass/conditional.scss';

const Ref =()=> {
    const firstName = useRef(null);
    // const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let a = firstName.current.focus();
        console.log(a);
        
    }
    

        return (
            <div className='conditional'>
                
                <form className='conditional__form' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='firstname' 
                    ref={firstName}
                    className='conditional__form-text'
                    />

                    <input 
                    type='submit'
                    value='Submit'
                    className='conditional__btn'
                    />
                </form>   
            </div>
        );
    }


export default Ref;
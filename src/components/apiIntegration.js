import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../sass/apiIntegration.scss';

const ApiIntegration =()=> {
    const [taskName, setTaskName] = useState('');
    const [allTask, setAllTask] = useState([{}])
    const [condition, setcondition] = useState(false)
   
    // let arr = [{name:'ami', job:'man'}, {name:'aji', job:'woman'}]
    // let items = [];
    // console.log('task',allTask);
    // console.log('items',items);
    // for(let i = allTask.length -1; i>=0; i--){
    //     return items.push(allTask[i]);
    // }

    const apiEndpoints = `http://localhost:8000/api/todos`;

     const handleChange = (e)=>{
        setTaskName(e.target.value)
    }

    const handlePost = async ()=>{ 
        if(taskName === ''){
            alert('enter taskname!!!')
        }else{
            await axios.post(apiEndpoints, {taskName})
            setcondition(!condition);
        }
           
        }

    const handleGet = async () =>{
        const {data:get} = await axios.get(apiEndpoints)
        setAllTask(get);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        handlePost()
        console.log('taskName', taskName)
        console.log('allTask', allTask)
    }

    const handleDelete = async(id)=>{
        
       await axios.delete(`http://localhost:8000/api/todos/${id}`)
        handleGet();
    }

    useEffect(()=>{
        handleGet();
    },[condition])
    
        return (
            <div className='api'>
                <div className='api__sec'>
                <form onSubmit={handleSubmit} className='api__sec-form'>
                    
                    <input 
                    type='text'
                    placeholder='Enter task'
                    onChange={handleChange}
                    className='api__sec-form-input'
                    />

                    <input 
                    type='submit' 
                    value='add'
                    className='api__sec-form-btn'
                    />
                    
                </form>
                    <div className='api__sec-list'>
                    {allTask.map((val)=>
                        <div className='api__sec-list-items' key={val._id}>
                        <p className='api__sec-list-item'>{val.taskName}</p>
                        <p className='api__sec-list-delete' onClick={()=>handleDelete(val._id)}>X</p>
                        </div>
                    
                    )}
                    </div>
                
                </div>
                
               
            </div>
        );
    }


export default ApiIntegration;
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../sass/updateChart.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const UpdateChart =(props)=> {

    const [chart, setChart] = useState([])
    const {onToggle} = props;

    const handleGet = async () =>{
        const {data} = await axios.get(`http://localhost:5000/api/chartjs`)
        setChart(data);
    }

    useEffect(()=>{
        handleGet()
       console.log(chart);
    },[])

    const formik = useFormik({
        initialValues: {
          month: '',
          totalTask: '',
         
    
        },
        // validate,
        validationSchema: Yup.object().shape({
          month: Yup.string()
            .required('This field is required'),
          totalTask: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('This field is required'),
        }),
        onSubmit: (values, {resetForm}) => {
          console.log(values);
          resetForm({values:''});
        const {totalTask, month} = formik.values;
        axios.put(`http://localhost:5000/api/chartjs/${month}`,{totalTask} );
        onToggle();
    }
            
        })

        return (
            <div className='updateModal'>
                <div className='updateModal__form'>
                <div>
                <div class="updateModal__sec">
                <select
                name='month'
                value={formik.values.month}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value=''>Select Month</option>
                {chart.map(e =>    
                    <option key={e._id} value={e.month}>{e.month}</option> 
                )}
                </select>
                </div>
                {formik.touched.month && formik.errors.month ? 
                <div className='updateModal__label'>{formik.errors.month}</div> : null}
                </div>
                <div>
                <input 
                    placeholder='Enter total completed task '
                    className='updateModal__input'
                    type='number'
                    name='totalTask'
                    value={formik.values.totalTask}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.touched.totalTask && formik.errors.totalTask ? 
                    <div className='updateModal__label'>{formik.errors.totalTask}</div> : null}
                    </div>

                    <div className='updateModal__change'>
                    <input type='button' onClick={formik.handleSubmit} value='Submit' className='updateModal__change-btn'/>
                    <input type='button' onClick={onToggle} value='Cancel' className='updateModal__change-btn'/>
                    </div>
                    
                </div>
            </div>
        );
    }


export default UpdateChart;
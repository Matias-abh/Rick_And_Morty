
import { useState } from 'react';
import { validation } from './validation.js';
import css from './form.module.css';

const Form = () => {

    const [ input, setInput ] = useState({ username: '', password: '' });
    const [ errors, setErrors ] = useState({ username: '', password: '' });

   
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [property]: value });
        setErrors(validation({...input, [property]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const property = event.target.name;
        const value = event.target.value;

        if (Object.entries(errors).length) {
            setInput({ username: '', password: '' });
            setErrors({ username: '', password: '' });
            console.log('deberian verse los errorss---->', errors);            
        } else {            
            setInput({ username: '', password: '' });
            setErrors({ username: '', password: '' });
            console.log('se envio todo ok');            
        };
    };


    return (
        <>
            <div >
                <h1>FOOOOORMULARIO</h1>
                <div>
                    <label htmlFor='username'>Username</label>    
                    <input onChange={handleInputChange} value={input.username} type='text' name='username' />
                    {errors.username ? <p>{errors.username}</p> : null}       
                    <label htmlFor='password'>Password</label>             
                    <input onChange={handleInputChange} value={input.password} type='password' name='password' />   
                    {errors.password ? <p>{errors.password}</p> : null}       
                </div>

                <button type='submit' onClick={handleSubmit}>Login</button>      
            </div>
        </>
    )
};

export default Form;
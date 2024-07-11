
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

export const FormValidationExample = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneReft = useRef(null);
    const joiningRef = useRef(null);

    const[errors, setErrors] = useState({});

    const validation = () => {
        const newError = {};
        if(!nameRef.current.value) {
            newError.name = "Name is required";
        }
        if(!emailRef.current.value){
            newError.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)){
            newError.email = 'email is invalid';
        }
        if(!phoneReft.current.value){
            newError.phone = 'phone number is required';
        }else if (/^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phoneReft.current.value)){
            newError.phone = 'Phone number is invalid'
        }if(!joiningRef.current.value){
            newError.joining = 'joining date is required';
        }else if(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(joiningRef.current.value)){
            newError.joining= 'joining date is invalid';
        }
        return newError;
    }   

    function handleSubmit(e){
        e.preventDefault;
        const validationError = validation();
        if(Object.keys(validationError).length > 0){
            setErrors(validationError);
        }else {
            console.log('Form submitted:', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneReft.current.value,
                joining: joiningRef.current.value,
              });
            setErrors({})
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <br />
                <input
                    type='text'
                    ref={nameRef}
                />
                {errors.name &&
                    <span>
                        {errors.name}
                    </span>
                }
            </div>
            <div>
                <label>Email:</label><br />
                <input 
                    type='text'
                    ref={emailRef}
                />
                {errors.email && 
                    <span>
                        {errors.email}
                    </span>
                }
            </div>
            <div>
                <label>Phone</label><br />
                <input 
                    type='text'
                    ref={phoneReft}
                />
                {errors.phone && 
                    <span>
                        {errors.phone}
                    </span>
                }
            </div>
            <div>
                <label>Joining Date (yy-mm-dd)</label><br />
                <input 
                    type='text'
                    ref={joiningRef}
                />
                {
                    errors.joining && 
                    <span>
                        {errors.joining}
                    </span>
                }
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

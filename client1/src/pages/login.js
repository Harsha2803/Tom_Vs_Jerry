import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from '../loginvalidation';
import '../styles/login.css';

function Login() {
    const [values,setvalues]=useState({
        email:'',
        password:''
    })
    const [errors,seterrors]=useState({})
    const navigate = useNavigate()
    const handleSubmit1=(event)=>{
        event.preventDefault();
        seterrors(Validation(values))
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:3001/login', values)
              .then(res => {
                if(res.data==="Success"){
                    navigate('/home')
                    localStorage.setItem("loggedIn", true);
                }
                else{
                    alert("No record found");
                }
              })
              .catch(err => console.log(err))
          }
    }
    const handleinput=(e)=>{
        setvalues(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
  return (
        <div className='signinpage'>
            <div className='loginbox'>
                <h1>Login</h1>
                    <form action="" onSubmit={handleSubmit1}>
                        <div className="entry">
                            <label htmlFor="email">Email</label>
                            <input type="email" className='form-control rounded-0' onChange={handleinput} name='email'/>
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div className="entry">
                            <label htmlFor="password">Password</label>
                            <input type="password" className='form-control rounded-0' onChange={handleinput} name='password'/>
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type="submit" className='loginbutton'>login</button>
                        <p>Don't have an account? &nbsp;     
                            <Link to="/signup" className='createbutton'>Create Account</Link>
                        </p>
                    </form>
            </div>
        </div>
  )
}

export default Login
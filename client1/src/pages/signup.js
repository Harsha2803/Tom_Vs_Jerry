import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../signupvalidation'
import '../styles/register.css';
import axios from 'axios'

function Signup() {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
  })
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values))

     if(errors.username==="" && errors.email==="" && errors.password===""){
      axios.post('http://localhost:3001/signup', values)
        .then(res => {
          navigate('/')
        })
        .catch(err => console.log(err))
    }
  }

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='signuppage'>
      <div className='signupbox'>
        <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
              <div className="entry">
                <label htmlFor="username">Username</label>
                <input type="text" className='form-control rounded-0' name="username" onChange={handleInput} />
                {errors.username && <span className='text-danger'>{errors.username}</span>}
              </div>
              <div className="entry">
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control rounded-0' name="email" onChange={handleInput} />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className="entry">
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control rounded-0' name="password" onChange={handleInput} />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <button className='signupbutton'>Signup</button>
              <p>Already have an account ? &nbsp;
                <Link to="/" className='createbutton'>login</Link>
              </p>
            </form>
          </div>
    </div>  
  )
}

export default Signup

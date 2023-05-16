import React,{useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/stage12.css';

const Stage1and2 = () => {
    const navigate = useNavigate()
    const buttonhandler = () =>{
      navigate('/Stage2')
    }
  
    return (
      <div className='sign12Page'> 
      <div className='body'> 
          <div className = 'goal2'>
            <p>Hurray! You found out Cheese to Jerry. But, unfortunately, it has turned out to be fake cheese. Jerry being tricked by Tom is now pissed off. Meanwhile Tom has setup further tasks to reward Jerry with tons of cheese. Let's see can we help Jerry to Find Cheese ultimately.</p>
          </div>
          <div className='but'>
            <button className = "rounded-button1" onClick = { buttonhandler }> Proceed to Stage 2 </button>
          </div>
      </div>
      </div>
    )
}

export default Stage1and2
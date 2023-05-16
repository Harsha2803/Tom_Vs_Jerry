import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/deadend1.css';

const Deadend1 = () => {
    const navigate = useNavigate()
    const answerhandle = () =>{
        navigate('/Stage1');
    }  
  return (
    <div className="deadpage">
        <div className='proceed4'><p>You have reached a Dead-End. Can't proceed further, retry from Stage-1.</p></div>
        <div className='proceed3'> <button className='butt3' onClick={answerhandle}>Retry</button></div>
    </div>
  )
}

export default Deadend1
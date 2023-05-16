import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/deadend2.css';

const Deadend1 = () => {
    const navigate = useNavigate()
    const answerhandle = () =>{
        navigate('/Stage3');
    }  
  return (
    <div className="deadpage">
        <div className='proceed9'><p>You have reached a Dead-End. Can't proceed further, retry from Stage-3.</p></div>
        <div className='proceed12'> <button className='butt5' onClick={answerhandle}>Retry</button></div>
    </div>
  )
}

export default Deadend1
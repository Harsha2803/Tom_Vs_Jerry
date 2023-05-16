import React,{useState} from 'react'
import '../styles/Stage1.css'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Stopwatch from '../stopwatch'

const Stage1 = () => {
    const navigate = useNavigate()
    const buttonhandler = () =>{
      navigate('/Stage1and2')
    }
    const buttonhumm = () =>{
      navigate('/');
    }
  return (
    <div>
        <div className='Stage1Page'>
            <div className='header1'> Stage 1 : Find Out The Cheese </div>
            <div className ='play'>
                <button className = "body2" onClick = { buttonhandler }></button>
            </div>
            {/* <Stopwatch /> */}
            <div className='logout'>
              <button className='loggo' onClick={buttonhumm}>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default Stage1
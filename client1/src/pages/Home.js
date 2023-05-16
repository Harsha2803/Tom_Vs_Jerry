import React,{useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate()
  const buttonhandler = () =>{
    navigate('/Stage1')
  }

  return (
    <div className='HomePage'> 
    <div className='Play'> 
        <div className = 'goal'>
          <p> Jerry Was Searching for some Cheese, but Tom has hidden it somewhere in the living room. You need to help Jerry to find out the cheese. </p>
        </div>
        <button className = "rounded-button" onClick = { buttonhandler }> Go, Find Cheese </button>
    </div>
    </div>
  )
}

export default Home
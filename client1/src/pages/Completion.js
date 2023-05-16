import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/completion.css'

const Completion = () => {
    const navigate = useNavigate()
    const answerhandle1 = () =>{
        navigate('/Leaderboard');
    }
    const answerhandle2 = () =>{
        navigate('/Stage1');
    }
  return (
    <div className='completionpage'>
        <div className='leaderboard'>
            <button className='btu' onClick={answerhandle1}>
                LeaderBoard
            </button>
            <button className='btu' onClick={answerhandle2}>
                Play Again
            </button>
        </div>
    </div>
  )
}

export default Completion
import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/stage4.css';

const Stage4 = () => {
    const [answer4,setAnswer] = useState("");
    const navigate = useNavigate()

    const answerhandle = () =>{
        // let ans = answer4.toLowerCase();
        if(answer4 === "2"){
            alert("Yay! You got it right");
            navigate('/Stage5');
        }
        else if(answer4 === ""){
            alert("Please, Answer to proceed.");
        }
        else{
            navigate('/deadend2');
        }
    }
    const buttonhumm = () =>{
        navigate('/');
      }
  return (
    <div className='stage4page'>
        <div className='header4'>
                Stage 4 : Listen Some Music !
        </div>
        <div className='answer4'>
            <div className='inputbar4'>
                <input type={'text'} placeholder = "Answer" onChange={(e) => {setAnswer(e.target.value)}}/>
            </div>
            <div className='proceed7'><button className='butt4' onClick={answerhandle}>That's My Answer</button> </div>
        </div>
        <div className='task'>
            <p>In this task, Jerry is asked to listen to a video file and answer the given question.</p>
            <p>Question - How Many bed rooms are there in the 3rd Apartment ? </p>
        </div>
        <div className='logout'>
              <button className='loggo' onClick={buttonhumm}>Log Out</button>
            </div>
    </div>
  )
}

export default Stage4
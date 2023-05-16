import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/stage2.css';

const Stage2 = () => {
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate()

    const answerhandle = () =>{
        let ans = answer.toLowerCase();
        if(ans === "thomas"){
            alert("Yay! You got it right");
            navigate('/Stage3');
        }
        else if(ans === ""){
            alert("Please, Answer to proceed.");
        }
        else{
            navigate('/deadend1');
        }
    }
    const buttonhumm = () =>{
        navigate('/');
      }

  return (
    <div className='stage2page'>
        <div className='header2'> Stage 2 : What's My Name ? </div>
        <div className='bodystage2'>
            <p>
                Poor Jerry don't know Tom's Real Name. Tom gave some clues to find out his real name.
                <br/>Here are the clues.. 
            </p>
            <li type="1"> It's first name of a very famous inventor.</li>
            <li type="1"> "I have not failed. I've just found 10,000 ways that won't work." 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is what he said after his famous invension.</li>
            <li type="1"> Without him, our lives would have been much tougher or even darker rather. </li>
        </div>
        <div className='answer'>
            <div className='inputbar'>
                <input type={'text'} placeholder = "Answer" onChange={(e) => {setAnswer(e.target.value)}}/>
            </div>
            <div className='proceed2'><button className='butt2' onClick={answerhandle}>That's My Answer</button> </div>
        </div>
        <div className='logout'>
              <button className='loggo' onClick={buttonhumm}>Log Out</button>
            </div>
    </div>
  )
}

export default Stage2
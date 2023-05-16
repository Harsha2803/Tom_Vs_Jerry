import React, {useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/stage3.css';

const Stage3 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate()
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const buttonhumm = () =>{
        navigate('/');
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === 'option3') {
            navigate('/Stage4');
        }
        else if(selectedOption === '') {
            alert("Please, Select any option");
        }
        else {
            navigate('/Deadend2');
        }
    };
    return (
        <div className='stage3page'>
            <div className='header3'>
                Stage 3 : Keep In Order !!
            </div>
            <div className='body3page'>
                <p>
                    In this Task, Tom gave you a task to order the given series of events
                    chronologically.
                    <br/>
                    <a href="https://youtu.be/iR-JFks6uI0" target="_blank" rel="noopener">Click Here</a>
                </p>
            </div>
            <div className='Para'>
                <li type="1">A Crane steals worms from boat.</li>
                <br/>
                <li type="1">Dog notices that crane is stealing food for her babies.</li>
                <br/>
                <li type="1">The Dog and it's Master go for fishing.</li>
                <br/>
                <li type="1">Dog offers worms to crane and crane in return, 
                <br/> &nbsp; &nbsp; &nbsp; catches many fish and give them to dog.</li>
                <br/>
                <li type="1">Dog is unhappy as it's master doesn't notice crane's robbery.</li>
                <br/>
            </div>
            <div className='options'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="question1"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}/>
                            &nbsp; 2, 4, 5, 1, 3
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="question1"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}/>
                            &nbsp; 1, 3, 2, 4, 5
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="question1"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleOptionChange}/>
                            &nbsp; 3, 1, 5, 2, 4
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="question1"
                                value="option4"
                                checked={selectedOption === 'option4'}
                                onChange={handleOptionChange}/>
                            &nbsp; 1, 3, 5, 2, 4
                        </label>
                    </div>
                    <button type="submit" className="quiz-btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className='logout'>
              <button className='loggo' onClick={buttonhumm}>Log Out</button>
            </div>
        </div>
    )
}

export default Stage3
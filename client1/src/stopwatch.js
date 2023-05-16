import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  }

  componentDidMount() {
    const storedTime = localStorage.getItem('timerTime');
    const storedStart = localStorage.getItem('timerStart');
    const storedOn = localStorage.getItem('timerOn');

    if (storedTime && storedStart && storedOn) {
      const timerTime = parseInt(storedTime, 10);
      const timerStart = parseInt(storedStart, 10);
      const timerOn = storedOn === 'true';

      this.setState({ timerTime, timerStart, timerOn });
      if (timerOn) {
        this.startTimer();
      }
    }
  }

  componentWillUnmount() {
    this.saveTimer();
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: Date.now() - this.state.timerTime
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

//   resetTimer = () => {
//     this.setState({
//       timerStart: 0,
//       timerTime: 0
//     });
//   };

  saveTimer = () => {
    const { timerTime, timerStart, timerOn } = this.state;
    localStorage.setItem('timerTime', timerTime);
    localStorage.setItem('timerStart', timerStart);
    localStorage.setItem('timerOn', timerOn);
  };

  render() {
    const { timerTime } = this.state;
    const milliseconds = Math.floor((timerTime / 10) % 1000);
    const seconds = Math.floor((timerTime / 1000) % 60);
    const minutes = Math.floor((timerTime / 1000 / 60) % 60);
  
    return (
      <div className="stopwatch-container">
        <h2 className="stopwatch-title">Stopwatch</h2>
        <div className="stopwatch-timer">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}:
          {milliseconds.toString().padStart(3, '0')}
        </div>
        <div className="stopwatch-buttons">
          <button className="stopwatch-button" onClick={this.startTimer}>Start</button>
          <button className="stopwatch-button" onClick={this.stopTimer}>Stop</button>
          {/* <button className="stopwatch-button" onClick={this.resetTimer}>Reset</button> */}
        </div>
      </div>
    );
  }
}  

export default Stopwatch;
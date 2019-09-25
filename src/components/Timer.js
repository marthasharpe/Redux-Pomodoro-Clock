import React from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import { startTime, stopTime, resetTime } from '../actions/actCreators';

const Timer = ({ interval, running, timeLeft, stopTime, startTime, resetTime}) => {

    let time = timeLeft * 60;
    let minutes = Math.floor(time / 60);
    let seconds = (time % 60);

    return(
        <div className='timer-container'>
            <h2 id='timer-label'>{interval}</h2>
            <div id='time-left'>{minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}</div>

            <button
                className='button-child'
                id='start-stop'
                onClick={running ? stopTime : startTime}
            >
            Start/Stop
            </button>

            <button
                className='button-child'
                id='reset'
                onClick={resetTime}
            >
            Reset
            </button>
        </div>
    )
}

const mapStateToProps = ({ interval, timeLeft, running }) => ({
    interval,
    timeLeft,
    running
})

const mapDispatchToProps = {
    startTime,
    stopTime,
    resetTime,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
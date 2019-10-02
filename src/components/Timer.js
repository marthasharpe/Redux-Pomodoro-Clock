import React, { useEffect } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from '../actions/actCreators';

const Timer = ({ interval, timerRunning, secondsLeft, stopTimer, startTimer, resetTimer}) => {

    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft - minutes * 60;

    useEffect(() => {
        // const handleSwitch = () => {
        //     console.log('switch');
        //     if (timerLabel === 'Session') {
        //         setTimerLabel('Break');
        //         setSecondsLeft(breakLength * 60);
        //     } else if (timerLabel === 'Break') {
        //         setTimerLabel('Session');
        //         setSecondsLeft(sessionLength * 60);
        //     }
        // }
        
    //     let countdown = null;
    //     if (timerRunning && secondsLeft > 0) {
    //         countdown = setInterval(() => {
    //             setSecondsLeft(secondsLeft - 1);
    //         }, 1000);
    //     } else if (timerRunning && secondsLeft === 0) {
    //         countdown = setInterval(() => {
    //             setSecondsLeft(secondsLeft - 1);
    //         }, 1000);
    //         handleSwitch();
    //     } else {
    //         clearInterval(countdown);
    //     }
    //     return () => clearInterval(countdown);
    },
    [timerRunning, secondsLeft]);

    return(
        <div className='timer-container'>
            <h2 id='timer-label'>{interval}</h2>
            <div id='time-left'>{minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}</div>

            <button
                className='button-child'
                id='start-stop'
                onClick={timerRunning ? stopTimer : startTimer}
            >
            Start/Stop
            </button>

            <button
                className='button-child'
                id='reset'
                onClick={resetTimer}
            >
            Reset
            </button>
        </div>
    )
}

const mapStateToProps = ({ interval, secondsLeft, timerRunning }) => ({
    interval,
    secondsLeft,
    timerRunning
})

const mapDispatchToProps = {
    startTimer,
    stopTimer,
    resetTimer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
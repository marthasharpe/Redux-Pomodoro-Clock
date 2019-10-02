import React, { useEffect } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import Reset from './Reset';
import StartStop from './StartStop';

const Timer = ({ timerRunning, secondsLeft, interval }) => {

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

            <StartStop />
            <Reset />
        </div>
    )
}

const mapStateToProps = ({ secondsLeft, timerRunning, interval }) => ({
    secondsLeft,
    timerRunning,
    interval
})

export default connect(mapStateToProps, null)(Timer)
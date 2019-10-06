import React, { useEffect } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import Reset from './Reset';
import StartStop from './StartStop';
import { switchBreak, switchSession, decSeconds } from '../actions/actCreators'

const Timer = ({ timerRunning, secondsLeft, interval, switchBreak, switchSession, decSeconds }) => {

    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft - minutes * 60;

    useEffect(() => {
        const handleSwitch = () => {
            console.log('switch');
            if (interval === 'Session') {
                switchBreak();
            } else if (interval === 'Break') {
                switchSession();
            }
        }
        
        let countdown = null;
        if (timerRunning && secondsLeft > 0) {
            countdown = setInterval(() => {
                decSeconds();
            }, 1000);
        } else if (timerRunning && secondsLeft === 0) {
            countdown = setInterval(() => {
                decSeconds();
            }, 1000);
            handleSwitch();
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
    [timerRunning, secondsLeft, interval, switchBreak, switchSession, decSeconds]);

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

const mapDispatchToProps = {
    switchSession,
    switchBreak,
    decSeconds
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
import React, { useEffect } from 'react';
import './Timer.css';
import { connect } from 'react-redux';
import Reset from './Reset';
import StartStop from './StartStop';
import { switchBreak, switchSession, decSeconds } from '../actions/actCreators'
import soundfile from '../ride.wav'

const Timer = ({ timerRunning, secondsLeft, interval, switchBreak, switchSession, decSeconds }) => {

    const audio = new Audio(soundfile);
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft - minutes * 60;

    useEffect(() => {       
        let countdown = null;
        if (timerRunning && secondsLeft > 0) {
            countdown = setInterval(() => {
                decSeconds();
            }, 1000);
        } else if (timerRunning && secondsLeft === 0) {
            countdown = setInterval(() => {
                decSeconds();
            }, 1000);
            audio.play();
            if (interval === 'Session') {
                switchBreak();
            } else if (interval === 'Break') {
                switchSession();
            }
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
    [timerRunning, secondsLeft, interval, switchBreak, switchSession, decSeconds, audio]);

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
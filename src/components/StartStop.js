import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from '../actions/actCreators';

const StartStop = ({ timerRunning, startTimer, stopTimer }) => {
    return (
        <div className='start-stop-container'>
            <button
                className='button-child'
                id='start-stop'
                onClick={timerRunning ? stopTimer : startTimer}
                >
                Start/Stop
            </button>
        </div>
    )
}

const mapStateToProps = ({ timerRunning }) => {
    return {timerRunning};
}

const mapDispatchToProps = {
    startTimer,
    stopTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(StartStop)
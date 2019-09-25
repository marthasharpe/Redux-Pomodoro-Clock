import React from 'react';
import './Buttons.css';
import { connect } from 'react-redux';
import { startTime, stopTime, resetTime } from '../actions/actCreators';

const Buttons = ({ running, stopTime, startTime, resetTime }) => {
    return (
        <div className='buttons-container'>
            <button
                className='button'
                id='start-stop'
                onClick={running ? stopTime : startTime}
            >
            Start/Stop
            </button>

            <button
                className='button'
                id='reset'
                onClick={resetTime}
            >
            Reset
            </button>
        </div>
    )
}

const mapStateToProps = ({ running }) => ({
    running
})

const mapDispatchToProps = {
    startTime,
    stopTime,
    resetTime,
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
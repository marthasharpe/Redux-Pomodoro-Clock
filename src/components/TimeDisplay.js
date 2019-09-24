import React from 'react';
import './TimeDisplay.css';
import { connect } from 'react-redux';

const TimeDisplay = ({ interval, timeLeft }) => {
    return(
        <div className='display-container'>
            <h2 id='timer-label'>{interval}</h2>
            <div id='time-left'>{timeLeft}</div>
        </div>
    )
}

const mapStateToProps = ({ interval, timeLeft }) => ({
    interval,
    timeLeft
})

export default connect(mapStateToProps)(TimeDisplay)
import React from 'react';
import BreakTime from './components/BreakTime';
import SessionTime from './components/SessionTime';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import Buttons from './components/Buttons';

const App = () => {
    return (
        <div className='App-container'>
            <h1>React-Redux Pomodoro Clock</h1>
            <div className='set-time-container'>
                <BreakTime />
                <SessionTime />
            </div>
            <TimeDisplay />
            <Buttons />
        </div>
    )
}



export default App;
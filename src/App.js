import React from 'react';
import BreakTime from './components/BreakTime';
import SessionTime from './components/SessionTime';
import './App.css';
import TimeDisplay from './components/TimeDisplay';

const App = () => {
    return (
        <div className='App-container'>
            <h1>React-Redux Pomodoro Clock</h1>
            <div className='set-time-container'>
                <BreakTime />
                <SessionTime />
            </div>
            <TimeDisplay />
        </div>
    )
}



export default App;
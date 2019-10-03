import React from 'react';
import BreakTime from './components/BreakTime';
import SessionTime from './components/SessionTime';
import './App.css';
import Timer from './components/Timer';

const App = () => {
    return (
        <div className='App-container'>
            <h1>React-Redux Pomodoro Clock</h1>
            <div className='set-time-container'>
                <SessionTime />
                <BreakTime />
            </div>
            <Timer />
        </div>
    )
}



export default App;
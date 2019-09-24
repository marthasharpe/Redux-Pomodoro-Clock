import React from 'react';
import './BreakTime.css';
import { connect } from 'react-redux';
import {  } from '../actions/actCreators';

const Buttons = ({ }) => {
    return (
        <div className='button-container'>
            <button
                className='button-child'
                id='start-stop'
                onClick={}
            >
            Start/Stop
            </button>

            <button
                className='button-child'
                id='reset'
                onClick={}
            >
            Reset
            </button>
        </div>
    )
}

const mapStateToProps = ({  }) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
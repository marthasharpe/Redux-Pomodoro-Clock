import React from 'react';
import './BreakTime.css';
import { connect } from 'react-redux';
import { incBreak, decBreak } from '../actions/actCreators';

const BreakTime = ({ breakLength, incBreak, decBreak}) => {
    return (
        <div className='breaktime-container'>
            <h2 id='break-label'>Break Length</h2>
            <div className='button-container'>
                <button
                    className='button-child'
                    id='break-increment'
                    onClick={incBreak}
                >
                +
                </button>
                
                <h3
                    className='button-child'
                    id='break-length'
                >
                {breakLength}
                </h3>
                
                <button
                    className='button-child'
                    id='break-decrement'
                    onClick={decBreak}
                >
                -
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ breakLength }) => ({
    breakLength
})

const mapDispatchToProps = {
    incBreak,
    decBreak,
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakTime)
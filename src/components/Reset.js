import React from 'react';
import { connect } from 'react-redux';
import { resetTimer } from '../actions/actCreators';

const Reset = ({ resetTimer }) => {
    return (
        <div className='reset-container'>
            <button
                className='button-child'
                id='reset'
                onClick={resetTimer}
                >
                Reset
            </button>
        </div>
    )
}

const mapDispatchToProps = {
    resetTimer
}

export default connect(null, mapDispatchToProps)(Reset)
import React from 'react';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(e) {
        this.setState({
          input: e.target.value
        })
    }
    submitMessage() {
        this.setState({
            messages: this.state.messages.concat(this.state.input),
            input: ''
        })
    }
    render() {
        return(
            <div>
                <h2>Type in a new message:</h2>
                <input type='text' onChange={this.handleChange} value={this.state.input}/>
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map(msg => {<li>{msg}</li>})}
                </ul>
            </div>
        )
    }
}

export default Messages;
import React from 'react';
import uuidv4 from 'uuidv4';
import '../static/app.css';

const uriRegex = /spotify:[a-z]{1,10}:\w+/;

class SongInput extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.sendInput);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.sendInput);
    }

    componentDidUpdate() {
        // When the 'Add Song' button is clicked, focus in the newly-shown input
        if (this.props.show) {
            this.songInput.focus();
        }
    }

    sendInput = (e) => {
        if (e.key === 'Enter') {
            this.props.showSongInput(false);
            this.props.addSong(this.props.inputVal, uuidv4());

            // Reset the text input and its corresponding state
            this.props.setInputValue('');
            this.songInput.value = '';
        }
        
    }

    hideInput = () => {
        this.props.showSongInput(false);
        this.props.setInputValue('');
        this.songInput.value = '';
    }

    handleChange = (e) => {
        const match = uriRegex.exec(e.target.value);
        if (match !== null) {
            const requestUri = 'http://localhost:9091/song/' + e.target.value;
            fetch(requestUri).then(results => {
                results.json().then(data => {
                    console.log(data)
                })
            }) 
        }
        this.props.setInputValue(e.target.value);
    }
    
    render() {
        return (
        <div className="input-container" style={this.props.show ? { visibility: 'visible' }: { visibility: 'hidden' }}>
            <input 
                type="text" 
                onBlur = { () => this.hideInput() } 
                onChange={this.handleChange} 
                ref={(input) => {this.songInput = input;}} 
            />
        </div>); 
        
    }
}

export default SongInput;
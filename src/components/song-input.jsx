import React from 'react';
import uuidv4 from 'uuidv4';

class SongInput extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.sendInput);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.sendInput);
    }

    sendInput = (e) => {
        console.log(this.props.inputVal)
        if (e.key === 'Enter') {
            this.props.showSongInput(false);
            this.props.addSong(this.props.inputVal, uuidv4());
            this.props.setInputValue('');
        }
        
    }
    
    updateInput = (e) => {
        this.props.setInputValue(e.target.value)
    }

    render() {
        const inputBox = (
            this.props.show ? <input type="text" onBlur = { () => this.props.showSongInput(false) } onChange={this.updateInput}/> : <div />
        )
        return inputBox;
    }
}

export default SongInput;
import { connect } from 'react-redux';
import { addSong, showSongInput, setInputValue } from '../data/actions'
import SongInput from '../components/song-input';

const mapStateToProps = (state, ownProps) => ({
    show: state.queueReducer.songInput,
    inputVal: state.queueReducer.inputVal,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    addSong: (uri, uuid) => {
        dispatch(addSong(uri, uuid));
    },
    showSongInput: (val) => {
        dispatch(showSongInput(val));
    }, 
    setInputValue: (val) => {
        dispatch(setInputValue(val));
    },
});

const SongInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongInput);

export default SongInputContainer;
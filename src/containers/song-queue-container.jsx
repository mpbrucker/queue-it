import { connect } from 'react-redux';
import { addSong } from '../data/actions';
import SongQueue from '../components/song-queue';

const mapStateToProps = (state, ownProps) => ({
    songs: state.songs
})

const mapDispatchToProps = (dispatch, ownProps) => ({});

const SongQueueContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongQueue);

export default SongQueueContainer;
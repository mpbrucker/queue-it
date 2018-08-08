import { connect } from 'react-redux';
import SongQueue from '../components/song-queue';

const mapStateToProps = (state, ownProps) => ({
    songs: state.songs,
    songList: state.songList
})

const mapDispatchToProps = (dispatch, ownProps) => ({});

const SongQueueContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongQueue);

export default SongQueueContainer;
import { listActions } from './actions';
import { bindActionCreators } from 'redux';

export default function listReducer(state = {}, action) {
    const curSongs = Object.assign([], state.songs);
    switch (action.type) {
        case listActions.ADD_SONG:
            const newSong = { uri: action.uri };
            curSongs.push(newSong);
            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        default:
            return state
    } 
}
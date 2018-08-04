import { listActions } from './actions';
import { bindActionCreators } from 'redux';

export default function listReducer(state = {}, action) {
    const curSongs = Object.assign([], state.songs);
    switch (action.type) {
        case listActions.ADD_SONG:
            const newSong = { uri: action.uri, uuid: action.uuid, };
            curSongs.push(newSong);
            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        case listActions.SHOW_SONG_INPUT:
            return Object.assign(
                {},
                state, 
                { songInput: action.val }
            )
        case listActions.SET_INPUT_VALUE:
            return Object.assign(
                {},
                state,
                { inputVal: action.val }
            )
        default:
            return state
    } 
}
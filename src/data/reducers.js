import { listActions } from './actions';
import { bindActionCreators } from 'redux';

export default function listReducer(state = {}, action) {
    const curSongs = Object.assign({}, state.songs);
    const curSongList = Object.assign([], state.songList)
    switch (action.type) {
        case listActions.ADD_SONG:
            curSongList.push(action.uuid)
            curSongs[action.uuid] = { uri: action.uri, inList: true };

            return Object.assign(
                {},
                state,
                { songs: curSongs, songList: curSongList }
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
        case listActions.REMOVE_FROM_QUEUE:
            console.log(curSongs[action.uuid])
            curSongs[action.uuid].inList = false;

            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        default:
            return state
    } 
}
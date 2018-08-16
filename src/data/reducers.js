import { listActions } from './actions';
import { bindActionCreators } from 'redux';

export default function listReducer(state = {}, action) {
    const curSongs = Object.assign({}, state.songs);
    const curSongList = Object.assign([], state.songList)
    switch (action.type) {
        case listActions.ADD_SONG:
            curSongList.push(action.uuid)
            curSongs[action.uuid] = { uri: action.uri, inList: true, queuePos: curSongList.length - 1 };

            return Object.assign(
                {},
                state,
                { songs: curSongs, songList: curSongList}
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
        case listActions.SET_IN_QUEUE_STATE:
            curSongs[action.uuid].inList = action.val;

            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        case listActions.INSERT_INTO_QUEUE:
            const origPos = curSongs[action.uuid].queuePos;
            if (curSongList.length > 1 && action.pos < curSongList.length) {
                curSongList.splice(origPos, 1);
                // if (action.pos === curSongList.length) {
                //     console.log(curSongList)
                //     curSongList.push(action.uuid);
                //     console.log(curSongList)
                // } else {
                    console.log(action.pos)
                    curSongList.splice(action.pos, 0, action.uuid);
                // }
                curSongs[action.uuid].queuePos = action.pos;
            }
            
            console.log(curSongList);
            return Object.assign(
                {},
                state,
                { songs: curSongs, songList: curSongList }
            )
        default:
            return state
    } 
}
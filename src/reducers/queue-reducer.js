import { queueActions } from '../actions/queue-actions';

export default function queueReducer(state = {}, action) {
    const curSongs = Object.assign({}, state.songs);
    const curSongList = Object.assign([], state.songList)
    switch (action.type) {
        case queueActions.ADD_SONG:
            curSongList.push(action.uuid)
            curSongs[action.uuid] = { uri: action.uri, inList: true, x: 0, y: 0};

            return Object.assign(
                {},
                state,
                { songs: curSongs, songList: curSongList}
            )
        case queueActions.SHOW_SONG_INPUT:
            return Object.assign(
                {},
                state, 
                { songInput: action.val }
            )
        case queueActions.SET_MOUSE_DOWN:
            return Object.assign(
                {},
                state,
                { mouseX: action.x, mouseY: action.y}
            )
        case queueActions.SET_INPUT_VALUE:
            return Object.assign(
                {},
                state,
                { inputVal: action.val }
            )
        case queueActions.SET_IN_QUEUE_STATE:
            curSongs[action.uuid].inList = action.val;

            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        case queueActions.INSERT_INTO_QUEUE:
            const origPos = curSongList.indexOf(action.uuid);
            if (origPos !== action.pos && curSongList.length > 1 && action.pos < curSongList.length) {
                curSongList.splice(origPos, 1);                
                curSongList.splice(action.pos, 0, action.uuid);
            }            
            return Object.assign(
                {},
                state,
                { songList: curSongList }
            )
        case queueActions.SET_ITEM_POS:
            curSongs[action.uuid].x = action.x;
            curSongs[action.uuid].y = action.y;
            return Object.assign(
                {},
                state,
                { songs: curSongs}
            )
        default:
            return state
    } 
}
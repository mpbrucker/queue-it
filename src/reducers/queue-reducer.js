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
        default:
            return state
    } 
}
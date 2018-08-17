import { itemActions } from '../actions/item-actions';

export default function itemReducer(state = {}, action) {
    const curSongs = Object.assign({}, state.songs);
    const curSongList = Object.assign([], state.songList)
    switch (action.type) {
        case itemActions.SET_IN_QUEUE_STATE:
            curSongs[action.uuid].inList = action.val;

            return Object.assign(
                {},
                state,
                { songs: curSongs }
            )
        case itemActions.INSERT_INTO_QUEUE:
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
        case itemActions.SET_ITEM_POS:
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
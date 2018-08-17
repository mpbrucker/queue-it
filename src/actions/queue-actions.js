export const queueActions = {
    ADD_SONG: 'ADD_SONG',
    SHOW_SONG_INPUT: 'SHOW_SONG_INPUT',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    SET_MOUSE_DOWN: 'SET_MOUSE_DOWN'
}

export function addSong(uri, uuid) {
    return { type: listActions.ADD_SONG, uri, uuid };
};

export function showSongInput(val) {
    return { type: listActions.SHOW_SONG_INPUT, val };
};

export function setInputValue(val) {
    return { type: listActions.SET_INPUT_VALUE, val };
};

export function setMouseDown(x, y) {
    return { type: listActions.SET_MOUSE_DOWN, x, y};
};

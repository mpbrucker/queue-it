export const listActions = {
    ADD_SONG: 'ADD_SONG',
    SHOW_SONG_INPUT: 'SHOW_SONG_INPUT',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
}

export function addSong(uri, uuid) {
    return { type: listActions.ADD_SONG, uri, uuid };
};

export function showSongInput(val) {
    return { type: listActions.SHOW_SONG_INPUT, val };
}

export function setInputValue(val) {
    return { type: listActions.SET_INPUT_VALUE, val };
}
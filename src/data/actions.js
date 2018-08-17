export const listActions = {
    ADD_SONG: 'ADD_SONG',
    SHOW_SONG_INPUT: 'SHOW_SONG_INPUT',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    SET_IN_QUEUE_STATE: 'SET_IN_QUEUE_STATE',
    INSERT_INTO_QUEUE: 'INSERT_INTO_QUEUE',
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

export function setInQueueState(uuid, val) {
    return { type: listActions.SET_IN_QUEUE_STATE, uuid, val };
}

export function insertIntoQueue(uuid, pos) {
    return { type: listActions.INSERT_INTO_QUEUE, uuid, pos };
}
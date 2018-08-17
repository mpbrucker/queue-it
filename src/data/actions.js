export const listActions = {
    ADD_SONG: 'ADD_SONG',
    SHOW_SONG_INPUT: 'SHOW_SONG_INPUT',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    SET_IN_QUEUE_STATE: 'SET_IN_QUEUE_STATE',
    INSERT_INTO_QUEUE: 'INSERT_INTO_QUEUE',
    SET_MOUSE_DOWN: 'SET_MOUSE_DOWN',
    SET_ITEM_POS: 'SET_ITEM_POS',
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

export function setMouseDown(x, y) {
    return { type: listActions.SET_MOUSE_DOWN, x, y};
}

export function setItemPos(uuid, x, y) {
    return { type: listActions.SET_ITEM_POS, uuid, x, y};
}
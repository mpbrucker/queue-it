export const queueActions = {
    ADD_SONG: 'ADD_SONG',
    SHOW_SONG_INPUT: 'SHOW_SONG_INPUT',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE',
    SET_IN_QUEUE_STATE: 'SET_IN_QUEUE_STATE',
    INSERT_INTO_QUEUE: 'INSERT_INTO_QUEUE',
    SET_MOUSE_DOWN: 'SET_MOUSE_DOWN',
    SET_ITEM_POS: 'SET_ITEM_POS',
}

export function addSong(uri, uuid) {
    return { type: queueActions.ADD_SONG, uri, uuid };
};

export function showSongInput(val) {
    return { type: queueActions.SHOW_SONG_INPUT, val };
}

export function setInputValue(val) {
    return { type: queueActions.SET_INPUT_VALUE, val };
}

export function setInQueueState(uuid, val) {
    return { type: queueActions.SET_IN_QUEUE_STATE, uuid, val };
}

export function insertIntoQueue(uuid, pos) {
    return { type: queueActions.INSERT_INTO_QUEUE, uuid, pos };
}

export function setMouseDown(x, y) {
    return { type: queueActions.SET_MOUSE_DOWN, x, y};
}

export function setItemPos(uuid, x, y) {
    return { type: queueActions.SET_ITEM_POS, uuid, x, y};
}
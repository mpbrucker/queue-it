export const itemActions = {
    SET_IN_QUEUE_STATE: 'SET_IN_QUEUE_STATE',
    INSERT_INTO_QUEUE: 'INSERT_INTO_QUEUE',
    SET_ITEM_POS: 'SET_ITEM_POS',
}

export function setInQueueState(uuid, val) {
    return { type: listActions.SET_IN_QUEUE_STATE, uuid, val };
}

export function insertIntoQueue(uuid, pos) {
    return { type: listActions.INSERT_INTO_QUEUE, uuid, pos };
}

export function setItemPos(uuid, x, y) {
    return { type: listActions.SET_ITEM_POS, uuid, x, y};
}
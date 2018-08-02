export const listActions = {
    ADD_SONG: 'ADD_SONG',
}

export function addSong(uri) {
    return { type: listActions.ADD_SONG, uri };
}
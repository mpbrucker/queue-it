import React from 'react';

class SongQueue extends React.Component {
    render() {
        let allSongs = []
        let allKeys = Object.keys(this.props.songs);
        Object.map(allKeys, (key) => allSongs.push(<div>{this.props.songs[key].uri}</div>));
        return <div>{allSongs}</div>;
    }
}



export default SongQueue;
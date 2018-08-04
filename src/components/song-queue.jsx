import React from 'react';

class SongQueue extends React.Component {
    render() {
        let allSongs = []
        let allKeys = Object.keys(this.props.songs);
        allKeys.forEach((key) => allSongs.push(
            <div key={this.props.songs[key].uuid}>
                {this.props.songs[key].uri}
            </div>
        ));
        return <div>{allSongs}</div>;
    }
}



export default SongQueue;
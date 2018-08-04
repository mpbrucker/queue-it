import React from 'react';
import '../static/app.css';

class SongQueue extends React.Component {
    render() {
        let allSongs = []
        let allKeys = Object.keys(this.props.songs);
        allKeys.forEach((key) => allSongs.push(
            <div key={this.props.songs[key].uuid} className="song">
                {this.props.songs[key].uri}
            </div>
        ));
    return (
        <div className="queue">
            {allSongs}
        </div>);
    }
}



export default SongQueue;
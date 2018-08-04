import React from 'react';
import Draggable from 'react-draggable';
import QueueItemContainer from '../containers/queue-item-container'
import '../static/app.css';

class SongQueue extends React.Component {
    render() {
        let allSongs = []
        let allKeys = Object.keys(this.props.songs);
        allKeys.forEach((key) => allSongs.push(
            <QueueItemContainer uri={this.props.songs[key].uri} uuid={this.props.songs[key].uuid} />
        ));
    return (
        <div className="queue">
            {allSongs}
        </div>);
    }
}



export default SongQueue;
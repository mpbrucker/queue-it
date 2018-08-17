import React from 'react';
import PropTypes from 'prop-types';
import QueueItemContainer from '../containers/queue-item-container'
import '../static/app.css';

class SongQueue extends React.Component {
    render() {
        let allSongs = []
        let draggedItem = <div />;
        this.props.songList.forEach((key) => {
            // Get the song based on its position in the song list
            const song = this.props.songs[key];
            allSongs.push(<QueueItemContainer key={key} uuid={key} {...song} />);
            
        });
    return (
        <div className="queue">
            {allSongs}
        </div>);
    }
}

SongQueue.propTypes = {
    songList: PropTypes.array.isRequired,
    songs: PropTypes.object.isRequired,
}



export default SongQueue;
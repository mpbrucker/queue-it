import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {

    updateBoxPos = (e) => {
        console.log(e);
    }

    render() {
        return (
            <Draggable position={{ x: 0, y: 0 }} key={this.props.songs[key].uuid} onStart onDrag={this.updateBoxPos} onStop={this.insertIntoQueue}>
                <div className="song">
                    {this.props.uri}
                </div>
            </Draggable>
        );
    }
}

QueueItem.propTypes = {
    removeFromQueue: PropTypes.func.isRequired,
    insertIntoQueue: PropTypes.func.isRequired,
    uri: PropTypes.string.isRequired,
}


export default QueueItem;
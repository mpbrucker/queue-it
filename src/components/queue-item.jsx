import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {
    componentDidMount() {
        console.log("mounted")
    }

    updateBoxPos = (e) => {
        // console.log(this.props.inList);
        const newPos = Math.floor(e.y/50);
        console.log(newPos);
        console.log(this.props.queuePos);
        if (newPos !== this.props.queuePos) {
            this.props.insertIntoQueue(this.props.uuid, newPos);
        }
    }

    /**
     * Temporarily removes the queue item from the queue upon drag start.
     */
    removeItem = (e) => {
        this.props.setInQueueState(this.props.uuid, false);
    }

    /**
     * Adds item back into queue once dragging stops.
     */
    addToQueue = (e) => {
        this.props.insertIntoQueue(this.props.uuid, 3);
    }

    render() {
        return (
            <div className="song-wrapper" >
                <div className="song unselectable" />
                <Draggable position={{ x: 0, y: 0 }} key={this.props.uuid} onStart={this.setInQueueState} onDrag={this.updateBoxPos} onStop={this.addToQueue}>
                    <div className="song">
                        {this.props.uri}
                    </div>
                </Draggable>
            </div>
        );
    }
}

QueueItem.propTypes = {
    setInQueueState: PropTypes.func.isRequired,
    insertIntoQueue: PropTypes.func.isRequired,
    uri: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    queuePos: PropTypes.number.isRequired,
}


export default QueueItem;
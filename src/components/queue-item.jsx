import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {
    componentDidMount() {
        console.log("mounted")
    }

    updateBoxPos = (e) => {
        // console.log(e);
        // console.log(this.props.inList);
    }

    /**
     * Temporarily removes the queue item from the queue upon drag start.
     */
    removeItem = (e) => {
        this.props.removeFromQueue(this.props.uuid)
    }

    /**
     * Adds item back into queue once dragging stops.
     */
    addToQueue = (e) => {
        this.props.insertIntoQueue(this.props.uuid , 3);
    }

    render() {
        return (
            <Draggable position={{ x: 0, y: 0 }} key={this.props.uuid} onStart={this.removeItem} onDrag={this.updateBoxPos} onStop={this.addToQueue}>
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
    uuid: PropTypes.string.isRequired,
}


export default QueueItem;
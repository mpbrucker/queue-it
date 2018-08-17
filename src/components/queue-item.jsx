import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {
    componentDidMount() {
        console.log("mounted")
    }

    updateBoxPos = (e) => {
        const newPos = Math.floor(e.y/50);
        this.props.insertIntoQueue(this.props.uuid, newPos);
    }

    render() {
        console.log(this.props.inList)
        const renderPos = this.props.inList ? 0 : -(this.props.queuePos * 50);
        return (
            <div className="song-wrapper" >
                <div className="song unselectable" />
                <Draggable 
                    position={{ x: 0, y: renderPos }} 
                    key={this.props.uuid} 
                    onStart={() => {this.props.setInQueueState(this.props.uuid, false);}} 
                    onDrag={this.updateBoxPos} 
                    onStop={() => {this.props.setInQueueState(this.props.uuid, true);}}>
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
    inList: PropTypes.boolean.isRequired,
    uri: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired
}


export default QueueItem;
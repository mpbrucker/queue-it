import React from 'react';
import {DraggableCore} from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {
    componentDidMount() {
        this.state = {}
    }

    updateBoxPos = (e) => {
        const newPos = Math.floor(e.y/50);
        this.props.insertIntoQueue(this.props.uuid, newPos);
        this.props.setItemPos(this.props.uuid, e.offsetX, e.offsetY);
        console.log(this.props.mouseX);
        // console.log(e);
    }
    
    /**
     * Called when an item is grabbed
     */
    dragStartHandler = (e) => {
        this.props.setMouseDown(e.offsetX, e.offsetY);
        console.log(e)
    }

    /**
     * Called when an item is let go of
     */
    dragStopHandler = (e) => {

    }

    /**
     * Returns the CSS styling the given item's position
     */
    getItemPosStyle = () => {
        
    }

    render() {
        const renderPos = this.props.inList ? 0 : -(this.props.queuePos * 50);
        return (
            <div className="song-wrapper" >
                {/* <div className="song unselectable" /> */}
                <DraggableCore
                    position={{ x: 0, y: 0 }} 
                    key={this.props.uuid} 
                    onStart={this.dragStartHandler} 
                    onDrag={this.updateBoxPos} 
                    onStop={this.dragStopHandler}>
                    <div className="song">
                        {this.props.uri}
                    </div>
                </DraggableCore>
            </div>
        );
    }
}

QueueItem.propTypes = {
    setInQueueState: PropTypes.func.isRequired,
    insertIntoQueue: PropTypes.func.isRequired,
    setMouseDown: PropTypes.func.isRequired,

    inList: PropTypes.bool.isRequired,
    uri: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    
    mouseX: PropTypes.number,
    mouseY: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
}

QueueItem.defaultProps = {
    mouseX: 0,
    mouseY: 0,
    x: 0, 
    y: 0,
}


export default QueueItem;
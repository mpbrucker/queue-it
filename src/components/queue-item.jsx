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
        this.props.setItemPos(this.props.uuid, e.pageX, e.pageY);
        // console.log(this.props.mouseX);
        // console.log(e);
        console.log(this.props.x);
        console.log(this.props.y);
    }
    
    /**
     * Called when an item is grabbed
     */
    dragStartHandler = (e) => {
        this.props.setMouseDown(e.pageX, e.pageY);
        console.log(e.pageX)
        // console.log(e)
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
        return {
            transform: "translate(`this.props.x`,`this.props.y`)"
        };
    }

    render() {
        const renderPos = this.props.inList ? 0 : -(this.props.queuePos * 50);
        return (
            <div className="song-wrapper" >
                {/* <div className="song unselectable" /> */}
                <DraggableCore
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
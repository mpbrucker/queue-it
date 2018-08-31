import React from 'react';
import {DraggableCore} from 'react-draggable';
import PropTypes from 'prop-types';

class QueueItem extends React.Component {
    componentDidMount() {
        this.state = {}
    }

    getNewQueuePos = (yVal, curPos) => {
        const newPos = Math.floor((yVal-this.props.mouseY)/60)
        // console.log(yVal)
        if (newPos >= 0 && newPos !== curPos && this.props.songList.length > 1 && newPos < this.props.songList.length) {
            return newPos;
        } else {
            return curPos;
        }

    }

    updateBoxPos = (e) => {
        const curPos = this.props.songList.indexOf(this.props.uuid)
        console.log(curPos)
        const queuePos = this.getNewQueuePos(e.pageY, curPos)
        console.log(queuePos)
        this.props.insertIntoQueue(this.props.uuid, queuePos);
        this.props.setItemPos(this.props.uuid, e.pageX-this.props.mouseX, e.pageY-this.props.mouseY-(queuePos*60));
        // console.log(this.props.mouseX);
        // console.log(e);
        // console.log(this.props.x);
        // console.log(this.props.y);
    }
    
    /**
     * Called when an item is grabbed
     */
    dragStartHandler = (e) => {
        this.props.setMouseDown(e.pageX, e.pageY);
        // console.log(e.pageX)
        // console.log(e)
    }

    /**
     * Called when an item is let go of
     */
    dragStopHandler = (e) => {
        this.props.setItemPos(this.props.uuid, 0, 0);
    }

    render() {
        let itemStyle = {
            transform: `translate(${this.props.x}px,${this.props.y}px)`
        };

        return (
            <div className="song-wrapper" >
                <div className="song unselectable" />
                <DraggableCore
                    key={this.props.uuid} 
                    onStart={this.dragStartHandler} 
                    onDrag={this.updateBoxPos} 
                    onStop={this.dragStopHandler}>
                    <div className="song" style={itemStyle}>
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
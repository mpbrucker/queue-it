import { connect } from 'react-redux';
import { setInQueueState, insertIntoQueue, setMouseDown, setItemPos } from '../data/actions'
import QueueItem from '../components/queue-item';

const mapStateToProps = (state, ownProps) => ({
    uuid: ownProps.uuid,
    x: ownProps.x,
    y: ownProps.y,

    songList: state.songList,
    mouseX: state.mouseX,
    mouseY: state.mouseY,
});

const mapDispatchToProps = (dispatch) => ({
    setInQueueState: (uuid, val) => {
        dispatch(setInQueueState(uuid, val));
    },
    insertIntoQueue: (uuid, pos) => {
        dispatch(insertIntoQueue(uuid, pos));
    },
    setMouseDown: (x, y) => {
        dispatch(setMouseDown(x, y));
    },
    setItemPos: (uuid, x, y) => {
        dispatch(setItemPos(uuid, x, y));
    }
});

const QueueItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(QueueItem);

export default QueueItemContainer;
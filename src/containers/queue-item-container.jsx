import { connect } from 'react-redux';
import { setInQueueState, insertIntoQueue } from '../data/actions'
import QueueItem from '../components/queue-item';

const mapStateToProps = (state, ownProps) => ({
    uuid: ownProps.uuid,
    songList: state.songList,
});

const mapDispatchToProps = (dispatch) => ({
    setInQueueState: (uuid, val) => {
        dispatch(setInQueueState(uuid, val));
    },
    insertIntoQueue: (uuid, pos) => {
        dispatch(insertIntoQueue(uuid, pos));
    }

});

const QueueItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(QueueItem);

export default QueueItemContainer;
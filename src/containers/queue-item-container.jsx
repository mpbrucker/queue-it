import { connect } from 'react-redux';
import { removeFromQueue, insertIntoQueue } from '../data/actions'
import QueueItem from '../components/queue-item';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    removeFromQueue: (uuid) => {
        dispatch(removeFromQueue(uuid));
    },
    insertIntoQueue: (uuid, component) => {
        dispatch(insertIntoQueue(uuid, component));
    }

});

const QueueItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(QueueItem);

export default QueueItemContainer;
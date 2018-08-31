import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './reducers/main-reducer';

import SongQueueContainer from './containers/song-queue-container';
import SongInputContainer from './containers/song-input-container';

/**
 * The main React container for the app. It holds the state and passes it down
 * as props to its child components.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={ songs: [] };
        this.store = createStore(
            mainReducer,
            { queueReducer: {songs: {}, songList: [], showInput: false} }
        );
    };

    addSong = () => {
        this.store.dispatch({ type: 'SHOW_SONG_INPUT', val: true })
        // this.store.dispatch({type: 'ADD_SONG', uri: "asdf1234" });
    };


    render() {
        return (
        <Provider store={this.store}>
            <div>
                <div className="queue-container" >Song List
                    <button onClick={this.addSong} >Add Song</button>
                    <SongQueueContainer />
                </div>
                <SongInputContainer />
            </div>
        </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
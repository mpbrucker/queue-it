import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listReducer from './data/reducers';

import SongQueueContainer from './containers/song-queue-container';

/**
 * The main React container for the app. It holds the state and passes it down
 * as props to its child components.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={ songs: [] };
        this.store = createStore(
            listReducer,
            { songs: [] }
        );
    };

    addSong = () => {
        this.store.dispatch({type: 'ADD_SONG', uri: "asdf1234" });
    };


    render() {
        return (
        <Provider store={this.store}>
            <div>Song List
                <button onClick={this.addSong} >Add Song</button>
                <SongQueueContainer />
            </div>
        </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
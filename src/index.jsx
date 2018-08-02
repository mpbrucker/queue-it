import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, Provider } from 'react-redux';
import listReducer from 'data/reducers';

/**
 * The main React container for the app. It holds the state and passes it down
 * as props to its child components.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={ songs: [] };
        this.store = createStore(listReducer);
    }

    addSong = () => {
        this.store.dispatch('ADD_SONG', "asdf1234");
    }


    render() {
        return (
        <Provider store={this.store}>
            <div>Song List
                <button onClick={this.addSong} >Add Song</button>
            </div>
        </Provider>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
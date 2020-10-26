import React, { Fragment} from 'react';
import {Provider} from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configureStore from './store';

const store = configureStore();
const App = () => {

    return (
        <Provider store={store}>
            <Fragment>
                <Header/>
                <ImageGrid/>
            </Fragment>
        </Provider>
    );
}

export default App;

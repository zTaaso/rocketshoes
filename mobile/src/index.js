import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

import store from './store';

export default function Index() {
    return (
        <Provider store={store}>
            <Header />
            <Routes />
        </Provider>
    );
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import App from './app/App';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare, logger))
);

sagaMiddleWare.run(rootSaga);

const rootElement: any = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);

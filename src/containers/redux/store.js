import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers/index";
import {dataSaga, rootSaga} from "../../saga";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware();

const composeEnhacers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhacers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

sagaMiddleware.run(rootSaga)

export default store;


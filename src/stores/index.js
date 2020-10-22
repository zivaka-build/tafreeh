import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from 'redux';
import { sagas } from "../sagas";
import rootReducer from "./reducers/root.reducer";



// let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(sagaMiddleware);

// add the redux dev tools process.env.NODE_ENV !== 'production' &&
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(sagas);

export { store };

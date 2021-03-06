import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
////const store = createStore(()=> [], {},applyMiddleware()); 
// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// export default store;

export default function store(initialState){

    const middleware = [thunk];
    
    return  createStore(
            rootReducer,
            initialState,
            compose(
                        applyMiddleware(...middleware),
                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                    )
        );
}
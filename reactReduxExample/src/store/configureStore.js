/*write reducers that take these actions and return a new state of our application
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	console.log("store -> configureStore -> configureStore");
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
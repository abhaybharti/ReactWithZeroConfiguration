import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/allActions';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('stuffReducer.js -> FETCH_STUFF Action :' + action);
      return action;
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('stuffReducer.js -> RECEIVE_STUFF Action : '+newState);
      return newState;
    default:
	  console.log('stuffReducer.js -> default :'+state);
      return state;
  }
}
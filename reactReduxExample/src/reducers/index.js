/* Root reducer to combine all individual reducer
*/
 
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
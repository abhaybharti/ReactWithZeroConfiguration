/*write reducers that take these actions and return a new state of our application
*/
export function itemsHasErrored(state = false, action) {
	console.log("reducers -> items -> itemsHasErrored");
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
	console.log("reducers -> items -> itemsIsLoading");
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
	console.log("reducers -> items -> items");
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
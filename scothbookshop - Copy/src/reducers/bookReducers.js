/*write reducers that take these actions and return a new state of our application
*/

// ./src/reducers/bookReducers.js
export default (state = [], action) => {
  switch (action.type){
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case 'CREATE_BOOK':
        state.push(action.book);
    default:
          return state;
  }
};



/*
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
}*/
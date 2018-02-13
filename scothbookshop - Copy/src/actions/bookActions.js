/*Creating our actions,
 action creators are functions that return an action. We export each one so we can use them elsewhere in our codebase
 */
 
// ./src/actions/bookActions.js
export const createBook = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_BOOK',
    // Payload
    book: book
  }
};

/* 
export function itemsHasErrored(bool) {
	console.log("Actions -> items -> itemsHasErrored");
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
	console.log("Actions -> items -> itemsIsLoading");
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
	console.log("Actions -> items -> itemsFetchDataSuccess");
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function errorAfterFiveSeconds() {
	console.log("Actions -> items -> errorAfterFiveSeconds");
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export function itemsFetchData(url) {
	console.log("Actions -> items -> itemsFetchData");
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}*/
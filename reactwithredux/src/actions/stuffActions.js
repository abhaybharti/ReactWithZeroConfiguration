import * as allActions from './allActions';

export function receiveStuff(data) {
	console.log("stuffActions.js -> receiveStuff() : "+data);
    return {type: allActions.RECEIVE_STUFF, stuff: data};
}

export function fetchStuff() {
	console.log("stuffActions.js -> fetchStuff()");
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
					console.log("stuffActions.js -> fetchStuff() -> if -> response.data : "+response.data);
                    dispatch(receiveStuff(response.data))
                }else{
					console.log("stuffActions.js -> fetchStuff()-> else -> response.data : "+response.data);
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}
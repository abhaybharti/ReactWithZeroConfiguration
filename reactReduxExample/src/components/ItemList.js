import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    
	componentDidMount() {
		console.log("component -> ItemList -> componentDidMount()");
		this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
	}
	
    render() {
		console.log("component -> ItemList -> Start");
		console.log(this.props);
		if (this.props.hasErrored) {
			console.log("component -> ItemList -> render -> hasErrored : "+this.props.hasErrored);
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
			console.log("component -> ItemList -> render -> isLoading : "+this.props.isLoading);
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

/*
ItemList.PropTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};
*/

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
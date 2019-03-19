import React, {Component} from 'react';
import './App.css';
// import Count from "./Count";
import Bear from "./Bear"
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import axios from "axios";
import thunk from 'redux-thunk'

export const add = () => {
    return {type: 'ADD'}
}

export const add2 = (num) => {
    return {type: 'ADD2', num: num}
}

export const minus = () => {
    return {type: 'MINUS'}
}

const numberReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'ADD2':
            return state + action.num
        case 'MINUS':
            return state - 1
        default :
            return state
    }
}

// ==========  END Number reducer


export const getBearsSuccess = bears => ({
    type: 'GET_BEARS_SUCCESS',
    bears
});
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED'});

export const getBears = () => async (dispatch) => {
    try {
        console.log('get bear new')
        const response = await axios.get(`http://localhost/api/bears`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody));
    } catch (error) {
        console.error(error);
        dispatch(getBearsFailed());
    }
}


export const bearReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_BEARS_SUCCESS':
            console.log('action: ' , action.bears)
            return action.bears
        case 'GET_BEARS_FAILED':
            console.log('action: Failed')
            return action.bears
        default:
            return state
    }
}


const rootReducer = combineReducers( {
    number:numberReducer,
    bears: bearReducer
})
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Bear />
            </Provider>
        );
    }
}

export default App;

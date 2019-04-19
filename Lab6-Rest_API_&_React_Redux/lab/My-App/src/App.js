import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Count from './Count'
// ======== action (As Dispatcher) ==========
export const add = () => ({ type: 'ADD' })
export const minus = () => ({ type: 'MINUS' })
// ======== reducer (As Controller) =========
export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
export const rootReducer = combineReducers({ number: numberReducer })
export const store = createStore(rootReducer)
// ======== wrap root element by Provider with Store ========
class App extends Component {
  render() {
    return <Provider store={store}><Count /> </Provider>
  }
}
export default App
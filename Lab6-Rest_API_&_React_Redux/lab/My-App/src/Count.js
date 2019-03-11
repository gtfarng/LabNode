import React, { Component } from 'react';
import './App.css';
import { add, minus, store } from './App'
import { connect } from 'react-redux'
class Count extends Component {
    render() {
        return (
            <div style={{ margin: '20px' }}>
                Counter: {this.props.number} <br />
                <button onClick={() => store.dispatch(add())}>+</button>
                <button onClick={() => store.dispatch(minus())}>-</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { number: state.number }
}
export default connect(mapStateToProps)(Count);
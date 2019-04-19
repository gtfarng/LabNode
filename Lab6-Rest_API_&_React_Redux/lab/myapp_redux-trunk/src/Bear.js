import React, { Component } from 'react'
import './App.css'
import { getBears } from './App'
import { connect } from 'react-redux'

class Bear extends Component {

    componentDidMount() {
        console.log('props', this.props)
        this.props.getBears()
    }

    renderBears = () => {
        if (this.props.bears) {
            return this.props.bears.map((bear, index) => {
                console.log(bear.name)
                return (<li key={index}> {bear.name} : {bear.weight} </li>
                )
            })
        }
    }

    render() {
        return (
            <div style={{ margin: '20px' }} align='center' >
                <h1>Render Bear</h1>
                <ul className='test'>
                    {this.renderBears()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ bears }) => {
    return { bears }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: () => dispatch(getBears())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bear);
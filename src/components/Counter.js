import React from 'react';
import { increase } from '../redux/counter/counterAction';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter : {props.counter}</h1>
            <button onClick={props.increase}>+</button>
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.counter
        //component sent as a props to the component
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(increase())
        //increase sent as a props to the component use for onclick
    }
}

// connect, connects component to store, so "dispatch" and "state" are accessible
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
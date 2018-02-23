import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }

    countPlus = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    countMinus  = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>counter count: {this.state.count}</p>
                <button onClick={this.countPlus}>plus</button>
                <button onClick={this.countMinus}>minus</button>
            </div>
        );
    }
}

export default Counter;
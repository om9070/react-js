import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class User4 extends Component {
    constructor() {
        super();
        this.state = {
            // data: "om prakash",
            data: 0,

        }
    }
    apple() {
        // alert("this is class constructer");
        // this.setState({ data: "sidhu" })
        this.setState({ data: this.state.data + 1 })

    }
    render() {
        return (
            <div className="App">
                <h1>this is user4 in react js</h1>
                <p>{this.state.data}</p>
                {/* <button onClick={this.apple}>update data</button> */}
                <button onClick={() => this.apple()}>update data</button>

            </div>
        )
    }
}
export default User4
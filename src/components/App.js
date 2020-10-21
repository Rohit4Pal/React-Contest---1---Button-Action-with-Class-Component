import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
		{ /* Do not remove this main div!! */ }
		<button id="click" onlick="handleClick()">Click Me</button>
    		</div>
    	);
    }
}


export default App;


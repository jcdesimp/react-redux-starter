"use strict"

import React from 'react';
import Counter from 'components/connectedCounter';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// set initial state
		}
	}


	render() {
		return (
			<Counter />	
		)
	}


}


export default App;

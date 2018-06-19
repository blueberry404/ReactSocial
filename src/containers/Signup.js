import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SignupView from '../components/SignupView';

class Signup extends Component {
	render() {
		return (
			<View>
				<SignupView />
			</View>
		);
	}
}

export default connect()(Signup);

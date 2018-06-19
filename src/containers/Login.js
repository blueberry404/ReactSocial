import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../actions/loginActions';
import LoginView from '../components/LoginView';

class Login extends Component {
	constructor(props) {
		super(props);
		this.onLogin = this.onLogin.bind(this);
	}

	render() {
		const {
			error,
			isLoading,
		} = this.props;
		return (
			<View style={{ flex: 1 }}>
				<LoginView
					onLogin={this.onLogin}
					error={error}
					isLoading={isLoading}
				/>
			</View>
		);
	}

	onLogin(email, password) {
		this.props.loginUserWithEmail(email, password);
	}
}

const mapStateToProps = ({ login }) => ({
	isLoading: login.isLoading,
	error: login.error,
});

const mapDispatchToProps = dispatch => ({
	loginUserWithEmail: (username, password) => dispatch(loginUser(username, password)),
});

Login.propTypes = {
	isLoading: PropTypes.boolean,
	error: PropTypes.any,
	loginUserWithEmail: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

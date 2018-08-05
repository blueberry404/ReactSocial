import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../actions/loginActions';
import LoginView from '../components/LoginView';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {loginSuccess: props.loginSuccess};
		this.onLogin = this.onLogin.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.loginSuccess === true && prevState.loginSuccess !== nextProps.loginSuccess) {
			return {
				loginSuccess: true,
			}
		}
		return null;
	}

	componentDidUpdate(prevProps) {
		if(prevProps.loginSuccess !== this.state.loginSuccess) {
			//TODO: Navigate inside app
		}
	}

	render() {
		const {
			isLoading,
		} = this.props;
		return (
			<View style={{ flex: 1 }}>
				<LoginView
					onLogin={this.onLogin}
					isLoading={isLoading}
				/>
			</View>
		);
	}

	onLogin({ email, password} ) {
		this.props.loginUserWithEmail(email, password);
	}
}

const mapStateToProps = ({ login, app }) => ({
	isLoading: app.loading,
	loginSuccess: login.loginSuccess,
});

const mapDispatchToProps = dispatch => ({
	loginUserWithEmail: (username, password) => dispatch(loginUser(username, password)),
});

Login.propTypes = {
	isLoading: PropTypes.bool,
	loginUserWithEmail: PropTypes.func,
	loginSuccess: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

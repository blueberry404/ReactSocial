import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signUpUser } from '../actions/signUpActions';

import SignupView from '../components/SignupView';
import * as NavigatorService from '../service/NavigatorService';
import * as helper from '../helpers/UIHelper';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = { success: props.success };
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState){
		if(nextProps.success === true && prevState.success !== nextProps.success) {
			return {
				success: true,
			}
		}
		return null;
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<SignupView
					isLoading={this.props.isLoading}
					onSignup={this.onSubmitForm}
				/>
			</View>
		);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.success !== this.state.success) {
			helper.showToast('You have registered successfully!');
			NavigatorService.resetToLoginAfterSignup();
		}
	}

	onSubmitForm(formData) {
		this.props.signupUser(formData);
	}
}

const mapStateToProps = ({signUp, app}) => ({
	success: signUp.registerSuccess,
	isLoading: app.loading,
});

const mapDispatchToProps = (dispatch) => ({
	signupUser: (user) => dispatch(signUpUser(user)),
});

Signup.propTypes = {
	signupUser: PropTypes.func,
	success: PropTypes.bool,
	isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

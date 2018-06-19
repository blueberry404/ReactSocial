import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Form, Label } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

import images from '../../../assets/images/images';
import styles from './style';
import FloatingTextfield from '../FloatingTextfield/index';
import RoundButton from '../RoundButton/index';

class LoginView extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '' };
	}

	render() {
		const {
			onLogin,
			error,
			isLoading,
		} = this.props;

		return (
			<ImageBackground style={styles.containerStyle}
				source={images.backgroundImage}
				resizeMode='cover'>
				<View style={styles.containerStyle}>
					<Spinner visible={isLoading} />
					<Text style={styles.headerStyle}>React Social</Text>
					<Form style={styles.formStyle}>
						<FloatingTextfield
							placeholder='Username'
							onChangeText={email => this.setState({ email })}
							text={this.state.email}
							keyboardType='email-address'
						/>
						<FloatingTextfield
							placeholder='Password'
							onChangeText={password => this.setState({ password })}
							text={this.state.password}
							secure
						/>
						{error && <Label style={styles.errorLabelStyle}>Username or password is incorrect</Label>}
					</Form>
					<RoundButton
						title='Login'
						style={styles.loginButtonStyle}
						onPress={() => onLogin(this.state.email, this.state.password)} />
				</View>
			</ImageBackground>);
	}
}

LoginView.propTypes = {
	isLoading: PropTypes.boolean,
	error: PropTypes.any,
	onLogin: PropTypes.func,
};

export default LoginView;

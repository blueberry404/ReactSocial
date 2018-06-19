import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Form } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';

import styles from './style';
import images from '../../../assets/images/images';
import FloatingTextfield from '../FloatingTextfield/index';
import RoundButton from '../RoundButton/index';

class SignupView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '', firstname: '', lastname: '', password: '', confirmPassword: '',
		};
	}

	render() {
		return (
			<ImageBackground style={styles.containerStyle}
				source={images.backgroundImage}
				resizeMode='cover'>
				<ScrollView style={styles.containerStyle}>
					<View style={styles.containerStyle}>
						<Text style={styles.headerStyle}>React Social</Text>
						<Form style={styles.formStyle}>
							<FloatingTextfield
								placeholder='Email'
								onChangeText={email => this.setState({ email })}
								text={this.state.email}
								keyboardType='email-address'
							/>
							<FloatingTextfield
								placeholder='First name'
								onChangeText={firstname => this.setState({ firstname })}
								text={this.state.firstname}
							/>
							<FloatingTextfield
								placeholder='Last name'
								onChangeText={lastname => this.setState({ lastname })}
								text={this.state.lastname}
							/>
							<FloatingTextfield
								placeholder='Password'
								onChangeText={password => this.setState({ password })}
								text={this.state.password}
								secure
							/>
							<FloatingTextfield
								placeholder='Confirm password'
								onChangeText={confirmPassword => this.setState({ confirmPassword })}
								text={this.state.confirmPassword}
								secure
							/>
						</Form>
						<RoundButton title='Register Me!' style={styles.buttonStyle} onPress={() => this.onRegister()} />
						<Spinner visible={this.props.isLoading} />
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}

SignupView.propTypes = {
	isLoading: PropTypes.boolean,
};

export default SignupView;

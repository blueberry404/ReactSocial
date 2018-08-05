/* eslint-disable react/prop-types */
import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { Form, Content } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { withFormik  } from 'formik';
import * as Yup from 'yup';

import images from '../../../assets/images/images';
import styles from './style';
import MaterialTextfield from '../MaterialTextfield';
import RoundButton from '../RoundButton/index';

const LoginView = (props) => {
	const {
		values,
		touched,
		errors,
		setFieldValue,
		handleSubmit,
		isLoading,
	} = props;

	return (
		<ImageBackground style={styles.containerStyle}
			source={images.backgroundImage}
			resizeMode='cover'>
			<Content style={styles.containerStyle}>
				<Text style={styles.headerStyle}>React Social</Text>
				<Form style={styles.formStyle}>
					<MaterialTextfield
						label='Email'
						value={values.email}
						onChangeText={email => setFieldValue('email', email)}
						error={errors.email && touched.email ? errors.email : ''}
					/>
					<MaterialTextfield
						label='Password'
						onChangeText={password => setFieldValue('password', password)}
						value={values.password}
						error={errors.password && touched.password ? errors.password : ''}
						secure
					/>
				</Form>
				<RoundButton
					title='Login'
					style={styles.loginButtonStyle}
					onPress={handleSubmit} />
				<Spinner visible={isLoading} />
			</Content>
		</ImageBackground>);
};

export default withFormik({
	validationSchema: Yup.object().shape({
		email: Yup.string().required('Please enter email').email('Enter valid email'),
		password: Yup.string().required('Please enter password').min(1),
	}),
	handleSubmit: (values, { props }) => {
		props.isLoading = true;
		props.onLogin(values);
	},
})(LoginView);


LoginView.propTypes = {
	isLoading: PropTypes.bool,
	error: PropTypes.any,
	onLogin: PropTypes.func,
};

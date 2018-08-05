/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Form, Content } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { withFormik  } from 'formik';
import * as Yup from 'yup';

import styles from './style';
import images from '../../../assets/images/images';
import RoundButton from '../RoundButton/index';
import MaterialTextfield from '../MaterialTextfield';

const SignupView = (props) => {
	const {
		values,
		touched,
		errors,
		setFieldValue,
		handleSubmit,
		isLoading,
	} = props;

	return (
		<ImageBackground style={styles.containerStyle} source={images.backgroundImage} resizeMode='cover'>
			<Content
				style={styles.containerStyle}>
				<View style={styles.containerStyle}>
					<Text style={styles.headerStyle}>React Social</Text>
					<Form style={styles.formStyle}>
						<MaterialTextfield
							label='Email'
							value={values.email}
							onChangeText={email => setFieldValue('email', email)}
							error={errors.email && touched.email ? errors.email : ''}
						/>
						<MaterialTextfield
							label='First name'
							onChangeText={firstname => setFieldValue('firstname', firstname)}
							value={values.firstname}
							error={errors.firstname && touched.firstname ? errors.firstname : ''}
						/>
						<MaterialTextfield
							label='Last name'
							onChangeText={lastname => setFieldValue('lastname', lastname)}
							value={values.lastname}
							error={errors.lastname && touched.lastname ? errors.lastname : ''}
						/>
						<MaterialTextfield
							label='Password'
							onChangeText={password => setFieldValue('password', password)}
							value={values.password}
							secure
							error={errors.password && touched.password ? errors.password : ''}
						/>
						<MaterialTextfield
							label='Confirm password'
							onChangeText={confirmPassword => setFieldValue('confirmPassword', confirmPassword)}
							value={values.confirmPassword}
							secure
							error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
						/>
					</Form>
					<RoundButton title='Register Me!' style={styles.buttonStyle} onPress={handleSubmit} />
					<Spinner visible={isLoading} color="yellow" />
				</View>
			</Content>
		</ImageBackground>
	);
};

export default withFormik({
	validationSchema: Yup.object().shape({
		email: Yup.string().required('Please enter email').email('Enter valid email'),
		firstname: Yup.string().required('Please enter first name').max(20),
		lastname: Yup.string().required('Please enter last name').max(20),
		password: Yup.string().required('Minimum 6 char password is required').min(6),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please enter confirm password'),
	}),
	handleSubmit: (values, { props }) => {
		props.isLoading = true;
		props.onSignup(values);
	},
})(SignupView);

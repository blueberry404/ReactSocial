import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import RoundButton from '../RoundButton/index';
import styles from './style';
import images from '../../../assets/images/images';

const HomeComponent = (props) => {
	const {
		onLogin,
		onRegister,
	} = props;

	return (
		<ImageBackground
			style={styles.containerStyle}
			source={images.backgroundImage}
			resizeMode='cover'>
			<View style={styles.containerStyle}>
				<Text style={styles.headerStyle}>React Social</Text>
				<View style={styles.centerStyle}>
					<RoundButton style={styles.buttonStyle} title='SIGN UP' onPress={onLogin} />
					<RoundButton style={styles.buttonStyle} title='LOGIN' onPress={onRegister} />
				</View>
			</View>
		</ImageBackground>
	);
};

HomeComponent.propTypes = {
	onLogin: PropTypes.func,
	onRegister: PropTypes.func,
};

export default HomeComponent;

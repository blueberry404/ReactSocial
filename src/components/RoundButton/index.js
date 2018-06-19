import React from 'react';
import { View, TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const RoundButton = (props) => {
	const {
		style,
		title,
		onPress,
	} = props;

	const {
		buttonContainer,
		buttonStyle,
		textStyle,
	} = styles;

	return (
		<View style={[style, buttonContainer]}>
			<TouchableOpacity style={buttonStyle} onPress={onPress}>
				<Text style={textStyle}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

RoundButton.propTypes = {
	style: ViewPropTypes.style,
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func,
};

export default RoundButton;

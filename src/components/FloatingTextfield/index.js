import React from 'react';
import { Item, Input, Label } from 'native-base';
import PropTypes from 'prop-types';

import styles from './style';

const FloatingTextfield = props => (
	<Item floatingLabel>
		<Label style={styles.labelStyle}>{props.placeholder}</Label>
		<Input
			style={styles.inputStyle}
			autoCorrect={false}
			underlineColorAndroid='transparent'
			onChangeText={props.onChangeText}
			value={props.text}
			secureTextEntry={props.secure}
			keyboardType={props.keyboardType} />
	</Item>
);

FloatingTextfield.propTypes = {
	onChangeText: PropTypes.func,
	placeholder: PropTypes.string,
	secure: PropTypes.bool,
	text: PropTypes.string,
	keyboardType: PropTypes.string,
};

export default FloatingTextfield;
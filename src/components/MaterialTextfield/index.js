import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'react-native-material-textfield';

import * as colors from '../../constants/colors';

class MaterialTextfield extends React.Component {
	render() {
		const { onChangeText, secure, text, error, label } = this.props;

		return (
			<TextField
				label={label}
				value={text}
				onChangeText={onChangeText}
				error={error}
				secureTextEntry={secure}
				errorColor={colors.errorColor}
				labelTextStyle={{color: '#ffff00'}}
				baseColor='#ffff00'
				autoCorrect={false}
				textColor='rgba(255, 255, 255, 0.7)'
				tintColor='rgb(44, 210, 191)'
				fontSize={14}
			/>
		);
	}
}

MaterialTextfield.propTypes = {
	onChangeText: PropTypes.func,
	secure: PropTypes.bool,
	text: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
};

export default MaterialTextfield;

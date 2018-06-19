import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
	buttonContainer: {
		height: 40,
		borderRadius: 20,
		backgroundColor: colors.buttonColor,
		justifyContent: 'center',
		paddingHorizontal: 10,
		shadowColor: 'black',
		shadowOpacity: 1.0,
		shadowOffset: { width: 0, height: 3 },
	},
	buttonStyle: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.buttonTextColor,
	},
});

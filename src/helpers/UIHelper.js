import { Toast } from 'native-base';

export const showToast = (message, buttonTitle='', action) => {
	Toast.show({
		text: message,
		textStyle: { color: 'yellow' },
		onClose: action,
		buttonText: buttonTitle,
		duration: 2000,
	});
};

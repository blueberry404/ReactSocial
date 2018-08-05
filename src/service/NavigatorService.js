/* eslint-disable no-underscore-dangle */
import { NavigationActions, StackActions} from 'react-navigation';

let _container;

export function setContainer(container) {
	_container = container;
}

export function navigate(routeName, params = null) {
	_container.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}

export function reset(routeName, params) {
	_container.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName,
					params,
				}),
			],
		}),
	);
}

export function resetToLoginAfterSignup() {
	_container.dispatch(
		StackActions.reset({
			index: 1,
			actions: [
				NavigationActions.navigate({routeName: 'Home'}),
				NavigationActions.navigate({routeName: 'Login'}),
			],
		}),
	);
}
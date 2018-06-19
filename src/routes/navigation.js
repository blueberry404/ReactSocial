import { createStackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';

export const RootNavigation = createStackNavigator(
	{
		Home: {
			screen: Home,
		},
		Login,
		Signup,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		},
	}
);

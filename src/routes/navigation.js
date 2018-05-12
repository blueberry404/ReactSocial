import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

export const RootNavigation = createStackNavigator(
    {
    Home: {
        screen: HomeScreen,
    },
    Login: LoginScreen,
    },
    {
        initialRouteName: 'Home'
    },
);

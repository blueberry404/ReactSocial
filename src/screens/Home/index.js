import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import RoundButton from '../../components/RoundButton';
import styles from './style';
import images from '../../../assets/images/images';

export default class Home extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.navigateToRegisterScreen = this.navigateToRegisterScreen.bind(this);
        this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
    }

    render() {

        const {
            containerStyle,
            centerStyle,
            buttonStyle,
            headerStyle
        } = styles;

        return (
            <ImageBackground 
    style={containerStyle} 
    source={images.backgroundImage} 
    resizeMode='cover'>
        <View style={containerStyle}>
            <Text style={headerStyle}>React Social</Text>
            <View style={centerStyle}>
                <RoundButton style={buttonStyle} title='SIGN UP' onPress={this.navigateToRegisterScreen} />
                <RoundButton style={buttonStyle} title='LOGIN' onPress={this.navigateToLoginScreen} />
            </View>
        </View>
        </ImageBackground>
        );
    }

    navigateToRegisterScreen() {
        
    }

    navigateToLoginScreen() {
        this.props.navigation.navigate('Login');
    }
}

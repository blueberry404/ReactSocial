import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import images from '../../../assets/images/images';
import styles from './style';

export default class Login extends Component {

    static navigationOptions = { header: null };

    render() {
        return (
        <ImageBackground style={styles.containerStyle}
        source={images.backgroundImage} 
        resizeMode='cover'>
           <View style={styles.containerStyle}>
            <Text style={headerStyle}>React Social</Text>
           </View>
        </ImageBackground>);
    }
}
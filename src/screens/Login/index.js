import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

import images from '../../../assets/images/images';
import styles from './style';
import FloatingTextfield from '../../components/FloatingTextfield';
import RoundButton from '../../components/RoundButton';

export default class Login extends Component {

    static navigationOptions = { header: null };

    render() {
        return (
        <ImageBackground style={styles.containerStyle}
        source={images.backgroundImage} 
        resizeMode='cover'>
           <View style={styles.containerStyle}>
            <Text style={styles.headerStyle}>React Social</Text>
            <Form style={styles.formStyle}>
            <FloatingTextfield placeholder='Username' />
            <FloatingTextfield placeholder='Password' />
          </Form>
          <RoundButton title='Login' style={styles.loginButtonStyle} />
           </View>
        </ImageBackground>);
    }
}
import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import images from '../../../assets/images/images';
import styles from './style';
import FloatingTextfield from '../../components/FloatingTextfield';
import RoundButton from '../../components/RoundButton';
import { loginUser } from '../../actions/loginActions';

class Login extends Component {

    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = { email: '', password: ''};
    }

    render() {
        return (
        <ImageBackground style={styles.containerStyle}
        source={images.backgroundImage} 
        resizeMode='cover'>
           <View style={styles.containerStyle}>
           <Spinner visible={this.props.isLoading} />
            <Text style={styles.headerStyle}>React Social</Text>
            <Form style={styles.formStyle}>
            <FloatingTextfield
            placeholder='Username'
            onChangeText={(email) => this.setState({email})} 
            text={this.state.email}
            keyboardType='email-address'
            />
            <FloatingTextfield
            placeholder='Password'
            onChangeText={(password) => this.setState({password})} 
            text={this.state.password}
            secure
            />
            {this.props.error && <Label style={styles.errorLabelStyle}>Username or password is incorrect</Label>}
          </Form>
          <RoundButton title='Login' style={styles.loginButtonStyle} onPress={() => this.onLogin()} />
           </View>
        </ImageBackground>);
    }

    onLogin() {
        this.props.loginUserWithEmail(this.state.email, this.state.password);
    }
}

const mapStateToProps = ({ login }) => {
    return {
        isLoading: login.isLoading,
        error: login.error,
    };
};

const mapDispatchToProps = (dispatch) => ({
    loginUserWithEmail: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

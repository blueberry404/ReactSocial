import React from 'react';
import { Item, Input, Label } from 'native-base';

import styles from './style';

export default FloatingTextfield = (props) => {
    return(
        <Item floatingLabel>
            <Label style={styles.labelStyle}>{props.placeholder}</Label>
            <Input 
            style={styles.inputStyle} 
            autoCorrect={false} 
            underlineColorAndroid='transparent'
            onChangeText={props.onChangeText}
            value={props.text}
            secureTextEntry={props.secure}
            keyboardType={props.keyboardType} />
        </Item>
    );
};

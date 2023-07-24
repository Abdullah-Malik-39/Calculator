import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={{color:'#fff'}}>2</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container : {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
        borderRadius: 10,
    }
});
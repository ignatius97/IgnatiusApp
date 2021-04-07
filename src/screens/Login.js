import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View>
            <Text>The introduction screen</Text>
            <Button title="Login Button" onPress={()=>navigation.navigate('Intro')}/>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({});

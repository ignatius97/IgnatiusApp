import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Introduction = ({ navigation }) => {
    return (
        <View>
            <Text>The introduction screen</Text>
            <Button title="Introduction" onPress={()=>navigation.navigate('Login')}/>
        </View>
    )
};

export default Introduction;

const styles = StyleSheet.create({});

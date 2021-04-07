import React from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';


const LetsGetStartedScreen = ({ navigation }) => {
    return (
        <View >
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <Text >Are you looking for  health companion to openly share your feelings &amp; experiences without been Judged? Look no further</Text>
            </View>
            {/* <View style={{flex: 4, alignSelf: 'center', justifyContent: 'center'}}>
                <Image
                style={globalStyles.welcomeImage}
                    resizeMode="contain"
                    source={require('../assets/carelogo-removebg-preview.png')} 
                />
            </View> */}
            <View style={{flex: 1, alignItems:'center'}}>
                <Text >YOUR TRUSTED COMPANION</Text>
            </View>
            {/* button */}
            <View style={{flex: .4}}>
                <Button title="lets get started" ></Button>
                
            </View>
            <View style={{flex: 1}}></View>
        </View>
    )
}

export default LetsGetStartedScreen

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#0084FE',
        height: '120px'
    }
})




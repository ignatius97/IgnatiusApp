import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
// import ViewPager from '@react-native-community/viewpager';


const ChatDesc = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            {/* <ViewPager style={styles.viewPager} initialPage={0}> */}
                <View key="1" collapsable={false}>
                   
                    {/* Progress dots */}
                
                    {/* button */}
                </View>
                <View key="2" collapsable={false}>
                    <View >
                        <Text >Your got a Question? Ask Us</Text>
                    </View>
                    
                    <View>
                        <Text>Get the best adice from friends and our professional meidcal practiions  related
                        to your health</Text>
                    </View>  
                    {/* Progress dots */}
                   
                    {/* button */}
                </View>
                <View key="3" collapsable={false}>
                   
                    <View>
                        <Text>We provide you with the best health tips to guide you when you make healthy life choices</Text>
                    </View>  
                    {/* Progress dots */}
                    <View >
                        
                    </View>
                    {/* button */}
                </View>
            {/* </ViewPager> */}
            <View >
                
                <Button onPress={()=> navigation.navigate('GetStarted')} title='continue' ></Button>

                
            </View>
        </View>
    )
}

export default ChatDesc

const styles = StyleSheet.create({
    viewPager: {
        flex: 12,
      },
})

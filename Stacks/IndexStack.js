import { createStackNavigator } from '@react-navigation/stack'
import {  createAppContainer } from 'react-navigation';
import Introduction from '../Components/IntroScreen';
import LetsGetStartedScreen from '../Components/LetsGetStartedScreen';

const IndexStack = createStackNavigator(
  {
    Introduction: { 
      screen: Introduction,
      navigationOptions: () =>  ({
        title: '',
        headerLeft: () => null,
        headerStyle: {
          backgroundColor: '#0084FE',
        },
      })
    },
    GetStarted: { 
      screen: LetsGetStartedScreen,
      navigationOptions: () =>  ({
        title: '',
        headerLeft: () => null,
        headerStyle: {
          backgroundColor: '#0084FE',
        },
      })
    }
  }
)

const IndexStackContainer = createAppContainer(IndexStack)

export default IndexStackContainer
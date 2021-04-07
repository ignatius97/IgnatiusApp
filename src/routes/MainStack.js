import { createAppContainer } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
  import Introduction from '../screens/Introduction';
  import Login from '../screens/Login';

  const IntroStack = createStackNavigator({
    Intro: {
        screen: Introduction
    },
    Login: {
        screen: Login 
    }
  })

  const AppStack = createAppContainer(IntroStack);

  export default AppStack;
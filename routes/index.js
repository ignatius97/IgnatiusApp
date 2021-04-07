
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import IndexStack from '../Stacks/IndexStack';
// import AppNavigation from './BottomStack';

const screens = {
    'Group List' : {
        screen: GroupList,
        navigationOptions: {
            title: 'Support Groups'
        }
    },
    'Join Group' : {
        screen: JoinGroup,
        navigationOptions: {
            title: 'Join Group'
        }
    },
    'Chat' : {
        screen: Chat
    },
    'Faq' : {
        screen: Faq
    },
    'HealthTips' : {
        screen: HealthTips
    },
    'CommentDisplay' : {
        screen: FaqCommentDisplay
    },
    'CommentEdit' : {
        screen: FaqComment
    }
}

const AddGroupStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: '#1E90FF',
            height: 106
        }
    }
});

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer;
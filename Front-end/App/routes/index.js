import {createSwitchNavigator} from 'react-navigation';
import TabNavigator from '../components/TabNavigator';
import App from "./Profile";
import LoginScreen from './Login'

const AppRoutes = {
    Profile: App,
    Chat: App,
    Messages: App,
    Home: App,
    Coracao: App
};

const AppStack = TabNavigator(AppRoutes);

export default createSwitchNavigator(
    {
        App: AppStack,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
    }
);
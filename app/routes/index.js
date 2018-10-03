import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import TabNavigator from '../components/TabNavigator'
import App from './Profile';
import ArticlesListScreen from './ArticleList';
import AuthLoadingScreen from './Loading';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';
import WelcomeScreen from './Welcome'

const AppRoutes = {
    Profile: App,
    Chat: App,
    Messages: ArticlesListScreen,
    Home: App,
    Coracao: App
};

const AppTabNavigator = TabNavigator(AppRoutes);

const AuthStackNavigator = createSwitchNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
})

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStackNavigator,
        App: AppTabNavigator,
    },
    {
        initialRouteName: 'App',
    }
);
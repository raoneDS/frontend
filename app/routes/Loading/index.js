import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

type Props = {};
export default class LoadingScreen extends Component<Props> {

    state = {
        signedIn: false,
        chekedSignIn: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(res => this.isSignedIn(res))
    }

    isSignedIn = (res) => {
        if (res) {
            this.setState({ signedIn: res, chekedSignIn: true });
            this.props.navigation.navigate('App')
        } else {
            this.props.navigation.navigate('Auth')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Colors from '../../themes/colors'
import firebase from 'react-native-firebase'

type Props = {};
export default class Profile extends Component<Props> {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    handleLogOut = () => {
        firebase.auth().signOut()
        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button  style={styles.welcome} title='Log Out' onPress={this.handleLogOut} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.textBackground,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: Colors.secondary,
        marginBottom: 5,
    },
});

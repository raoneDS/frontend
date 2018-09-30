import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Colors from "../../themes/colors";


type Props = {};

export default class LoginScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.welcome} title='Log In' onPress={() => this.props.navigation.navigate('App')}/>
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
    }
});
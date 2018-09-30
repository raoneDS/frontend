import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../themes/colors'


type Props = {};
export default class Profile extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Chá Comigo</Text>
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

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../../themes/colors'

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewLogo}>

        </View>
        <View style={styles.viewButton}>
          <Button style={styles.button} title='Sign In' onPress={() => this.props.navigation.navigate('SignIn')}> </Button>
          <Button style={styles.button} title='Sign In' onPress={() => this.props.navigation.navigate('SignIn')}> </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: Colors.textBackground,
  },
  viewLogo: {
    height: 400,
    backgroundColor: 'powderblue',
    marginBottom: 20,
  },
  viewButton: {
    //height: 200,
    marginBottom: 20,
    backgroundColor: 'black'
  },
  button: {
    marginTop: 20,
    margin: 400,
  }
});

/*
<Button style={styles.welcome} title='Sign In' onPress={() => this.props.navigation.navigate('SignIn')} />
        <Button style={styles.welcome} title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp')} />
        *;*/


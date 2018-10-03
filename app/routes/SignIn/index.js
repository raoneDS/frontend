/*
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

type Props = {};
export default class SignInScreen extends Component<Props> {

  state = { 
    email: '', 
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
*/
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import * as images from '../../Pictures'
import FullScreenSpinnerHOC from '../../components/HOC/FullScreenSpinnerHOC';
import Colors from '../../themes/colors'
import firebase from 'react-native-firebase'

const FullScreenSpinnerView = FullScreenSpinnerHOC(View);

type Props = {};
export default class SignInScreen extends Component<Props> {
  state = {
    email: '',
    password: '',
    errorMessage: null,
    logging: false
  }

  handleLogin = async () => {
    const { email, password, logging } = this.state
    try {
      this.setState({ logging: true });
      await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        setTimeout(2000);
      });
    } catch (error) {
      this.setState({ errorMessage: error.message })
    }
    /*
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }))
      */
  }
  /*
    state = {
    logging: false
  };
  
  // This is for demo only, normally you want to create an API wrapper
  async callLoginAPI() {
    this.setState({ logging: true });
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    alert('SIGN IN success');
    this.setState({ logging: false });
  }*/
  render() {
    return (
      <FullScreenSpinnerView
        spinner={this.state.logging}
        style={styles.container}
      >
        <View style={styles.container}>
          <View
            style={{
              flex: 1
            }}
          >
            <Image
              resizeMode="cover"
              style={[
                {
                  width: '100%',
                  height: '100%',
                  overflow: 'visible'
                }
              ]}
              source={images.logo}
            />
          </View>
          <TextInput
            placeholder="Username"
            style={[styles.textInput, { marginTop: 40 }]}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={[styles.textInput, { marginVertical: 20 }]}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <TouchableOpacity
            onPress={this.handleLogin}
            style={[styles.button]}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
              SIGN IN
          </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 20
            }}
          >
          </TouchableOpacity >
          <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}>
            Don’t have an account yet ?
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}
            style={{
              alignSelf: 'center',
              height: 34,
              justifyContent: 'center'
            }}>
            <Text style={{ color: '#0D92CA', fontSize: 15 }}>
              Create an account
          </Text>
          </TouchableOpacity>
        </View>
      </FullScreenSpinnerView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: Colors.textBackground,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ECF0F3',
    paddingHorizontal: 19
  },
  button: {
    height: 60,
    borderRadius: 3,
    backgroundColor: '#11B8FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
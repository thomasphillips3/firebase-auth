import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDspW4pWLc0YqMuVIPk-tLYxvu3_v16bPc",
      authDomain: "one-time-password-bbeae.firebaseapp.com",
      databaseURL: "https://one-time-password-bbeae.firebaseio.com",
      projectId: "one-time-password-bbeae",
      storageBucket: "one-time-password-bbeae.appspot.com",
      messagingSenderId: "519173468505"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

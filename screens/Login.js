import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';

//this.props.navigation.navigate("BottomTab")

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  NavigationForPassword = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('BottomTab');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/background2.png')}>
          <View style={styles.upperContainer}></View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={(enteredEmail) => {
                this.setState({ email: enteredEmail });
              }}
              placeholder={'Enter your email'}
              placeholderTextColor={'white'}
              autoFocus
            />
            <TextInput
              style={styles.textinput}
              onChangeText={(enteredPassword) => {
                this.setState({ password: enteredPassword });
              }}
              placeholder={'Enter your password'}
              placeholderTextColor={'white'}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.NavigationForPassword(
                  this.state.email,
                  this.state.password
                );
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  bgImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  upperContainer: { flex: 0.5, justifyContent: 'center', alignItems: 'center' },
  appIcon: { width: 280, height: 280, resizeMode: 'contain', marginTop: 80 },
  appName: { width: 130, height: 130, resizeMode: 'contain' },
  lowerContainer: { flex: 0.5, alignItems: 'center' },
  textinput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: '#5653D4',
  },
  button: {
    width: '43%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});

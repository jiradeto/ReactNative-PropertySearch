/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MnStatusBar from './js/common/MnStatusBar'
import IconA from 'react-native-vector-icons/Ionicons';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  TextInput,
  Image,
  Dimensions

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onPress() {
    console.log('tap me !!');
  }

  render() {
    return (    
       <View style={styles.old_container}>
        <Text style={styles.title}>
          มณี
        </Text>
        <Text style={styles.description}>
          ระบบนิเวศชุมชนครบวงจร
        </Text>
        <Text style={styles.description}>
          เพื่อสังคมสูงวัยสุขภาพดี
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
        >
          <Text style={styles.buttonText}> ลงทะเบียน </Text>
        </TouchableHighlight> 
      </View>
    );
  }
}
let DisplaySize = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2BDE80',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF'
  },
  old_container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    color: '#002F54',
    fontWeight: 'bold',
    fontFamily: "Kanit",
    fontSize: 80,
  },
  description: {
    color: '#002F54',
    fontFamily: "Kanit",
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

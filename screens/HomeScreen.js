import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    // <View>
    //   <Image source={{uri: 'https://media.giphy.com/media/Zx1ZEctOOvxK5VCwwE/giphy.gif'}}
    //    style={{width: 420, height: 800}} />
    //   <Text>This is Home page</Text>
    // </View>
    <ImageBackground source={{uri: 'https://media.giphy.com/media/Zx1ZEctOOvxK5VCwwE/giphy.gif'}} style={{width: '100%', height: '100%'}}>
    <Text>Use Me!!</Text>

  </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

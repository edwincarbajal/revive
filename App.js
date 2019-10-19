import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import React, { useState } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      setLoadingComplete: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  };

  async componentDidMount() {
   const { status } = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => this.setState({
            isLoadingComplete: true,
            setLoadingComplete: true,
          })}
        />
      );
    } else {
      return (
        // <View style={styles.container}>
        //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        //   <AppNavigator />
        // </View>
        <Container>
          <Header />
          <Content />
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="home" />
                <Text>Home</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    // Font.loadAsync({
    //   // This is the font that we are using for our tab bar
    //   // ...Ionicons.font,
    //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    //   // remove this if you are not using it in your app
    //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    // }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading() {
  this.setState(previousState => ({
    isLoadingComplete: !previousState.isLoadingComplete,
    setLoadingComplete: !previousState.setLoadingComplete,
  }));
}

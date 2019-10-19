import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { RNCamera } from 'react-native-camera';

import {
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    newPhotos: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    console.log(FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}newphotos`));
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'newphotos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async photo => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}newphotos/${Date.now()}.jpg`,
    });
    this.setState({ newPhotos: true });
    console.log(FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}newphotos`));
  }

  renderBottomBar = () =>
     <View
       style={styles.bottomBar}>
       <View style={{ flex: 0.4 }}>
         <TouchableOpacity
           onPress={this.takePicture}
           style={{ alignSelf: 'center' }}
         >
           <Ionicons name="ios-radio-button-on" size={70} color="white" />
         </TouchableOpacity>
       </View>
     </View>

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type={this.state.type}>
            {this.renderBottomBar()}
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  bottomButton: {
    flex: 0.3,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  }
});

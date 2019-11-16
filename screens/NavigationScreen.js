import React from 'react';
import MapView from 'react-native-maps';
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Dimensions
} from "react-native";
export default class NavigationScreen extends React.Component {
  static navigationOptions = {
    title: 'Tech Recycle Centers',
   };
   state = {
     location: null
   };
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

componentWillMount(){
  navigator.geolocation.getCurrentPosition(
    position => {
      const data = JSON.stringify(position);
      console.log(data);
      this.setState({
        location: data
      });
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}

  render() {
    var markers = [
      {
        latitude: 40.742220,
        longitude: -73.980970,
        title: "Garbage disposal, Waste management & recycling",
        description: "waste management service\n 0.2 mil",
      },
      {
        latitude: 40.740429,
        longitude:-73.983910,
        title: "The Junkluggers",
        description: "Garbage collection service\n 1.6 mil",
      }
    ]
    return (
      <View style={styles.container}>

      <MapView style = {styles.mapStyle}
        initialRegion={{
        latitude: 40.7408711,
        longitude: -73.9827362,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      <MapView.Marker
      coordinate={{
        longitude:markers[0].longitude,
        latitude:markers[0].latitude
      }}
      title= {markers[0].title}
      description={markers[0].description}
      />
      <MapView.Marker
      coordinate={{
        longitude:markers[1].longitude,
        latitude:markers[1].latitude
      }}
      title= {markers[1].title}
      description={markers[1].description}
      />

      </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

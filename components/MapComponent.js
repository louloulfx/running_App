import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';

import OverlayComponent from '../components/OverlayComponent';

export default class LocationComponent extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let lat = 0;
    let long = 0;
    if (this.state.errorMessage) {
      lat = this.state.errorMessage;
    } else if (this.state.location) {
      lat = parseFloat(this.state.location.coords.latitude);
      long = parseFloat(this.state.location.coords.longitude);
    }

    return (

      <View style={styles.container}>
        <OverlayComponent />
        <MapView
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          followsUserLocation={true}
          showsUserLocation={true}
          style={styles.mapStyle} >
          <Marker coordinate={{ latitude: lat, longitude: long }}>
            <View style={{ backgroundColor: "red", padding: 10 }}>
              <Text>{lat},{long}</Text>
            </View>
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
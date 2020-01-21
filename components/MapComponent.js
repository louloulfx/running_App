import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';

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

  _onPressButton() {
    alert('Are you ready to run ?')
  }

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
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>{text}</Text>
      // </View>
      <View style={styles.container}>

        <View style={styles.overlay} >
          <TouchableNativeFeedback style={styles.button} onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={{ color: 'white', fontSize: 20 }} >RUN</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

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
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8bc34a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    color: '#000',
    zIndex: 2,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
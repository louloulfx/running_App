import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";

import OverlayComponent from '../components/OverlayComponent';
import FinishedRun from '../components/FinishedRun'

export default class LocationComponent extends Component {
  constructor() {
    super();
    this.finishRun = this.finishRun.bind(this);
    this.goBack = this.goBack.bind(this);
    this.viewMap = this.viewMap.bind(this);
  }

  state = {
    location: {
      coords: {
        latitude: 40.779897,
        longitude: -73.968565
      }
    },
    errorMessage: null,
    finishedRun: false
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      console.log("Working in emulator.")
    }
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  finishRun() {
    this.setState({ finishedRun: true });
  };

  goBack() {
    this.setState({ finishedRun: false });
  }

  viewMap(finishFunc) {
    let lat = 0;
    let long = 0;
    if (this.state.errorMessage) {
      lat = this.state.errorMessage;
    } else if (this.state.location) {
      lat = parseFloat(this.state.location.coords.latitude);
      long = parseFloat(this.state.location.coords.longitude);
    }

    return (
      <View>
        <OverlayComponent finish={finishFunc} />
        <MapView
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
          followsUserLocation={true}
          showsUserLocation={true}
          style={styles.mapStyle}
        >
          {/* <Marker coordinate={{ latitude: lat, longitude: long }}>
            <View style={{ backgroundColor: "red", padding: 10 }}>
              <Text>
                {lat},{long}
              </Text>
            </View>
          </Marker> */}
        </MapView>
      </View>

    )
  }


  render() {

    return (
      <View style={styles.container}>
        {this.state.finishedRun ? <FinishedRun back={this.goBack} /> : this.viewMap(this.finishRun)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

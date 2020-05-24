import React from "react";
import { StyleSheet, View } from "react-native";

import LocationComponent from "../components/MapComponent";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <LocationComponent />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

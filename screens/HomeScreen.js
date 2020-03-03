import React from "react";
import { StyleSheet, View } from "react-native";

import LocationComponent from "../components/MapComponent";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LocationComponent />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

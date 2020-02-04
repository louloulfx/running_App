import MapView from "react-native-maps";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import firebase from "firebase";

import LocationComponent from "../components/MapComponent";

export default class HomeScreen extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
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

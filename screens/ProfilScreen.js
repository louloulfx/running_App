import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfilComponent from "../components/ProfilComponent";
import firebase from "firebase";

export default class ProfilScreen extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <ScrollView style={styles.container}>
        <ProfilComponent />
      </ScrollView>
    );
  }
}

ProfilScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#FFF"
  }
});

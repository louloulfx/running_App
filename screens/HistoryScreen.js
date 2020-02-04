import React from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import HistoryComponent from "../components/HistoryComponent";
import firebase from "firebase";

export default class HistoryScreen extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <ScrollView style={styles.container}>
        <HistoryComponent />
        <TextInput style={styles.input} />
      </ScrollView>
    );
  }
}

HistoryScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#FFF"
  }
});

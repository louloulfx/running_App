import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HistoryComponent from "../components/HistoryComponent";

export default class HistoryScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HistoryComponent />
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

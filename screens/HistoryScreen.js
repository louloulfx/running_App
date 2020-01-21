import React from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import HistoryComponent from "../components/HistoryComponent";

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <HistoryComponent />
      <TextInput style={styles.input} />
    </ScrollView>
  );
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

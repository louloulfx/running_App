import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProfilComponent from "../components/ProfilComponent";

export default function ProfilScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfilComponent />
    </ScrollView>
  );
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

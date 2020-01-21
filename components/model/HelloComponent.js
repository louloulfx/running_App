import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class HelloComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Coco",
      bonjour: "Bonjour, "
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bonjour}>{this.state.bonjour}</Text>
        <Text style={styles.nom}>{this.state.nom}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 15
  },
  nom: {
    fontWeight: "bold",
    fontSize: 35
  },
  bonjour: {
    fontSize: 25
  }
});

export default HelloComponent;

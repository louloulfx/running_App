import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

class HelloComponent extends Component {
  state = {
    nom: "",
    bonjour: "Bonjour, "
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then(doc => {
        this.setState({
          nom: doc.data().username
        });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
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

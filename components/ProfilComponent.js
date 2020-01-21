import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import HelloComponent from "../components/model/HelloComponent";

class ProfilComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleIdentifiant: "IDENTIFIANT",
      titleEmail: "E-MAIL",
      titleBirthday: "DATE DE NAISSANCE",
      titlePassword: "MOT DE PASSE",
      nom: "Coco",
      email: "coco@ynov.com",
      birthday: "12/05/2019",
      password: "***********",
      editButton: "MODIFIER",
      logoutButton: "DECONNEXION"
    };
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <HelloComponent />
        <View style={styles.main_container}>
          <View>
            <Text style={styles.title}>{this.state.titleIdentifiant}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text}>{this.state.nom}</TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleEmail}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text}>{this.state.email}</TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleBirthday}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text}>{this.state.birthday}</TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titlePassword}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text}>{this.state.password}</TextInput>
            </View>
          </View>
          <View>
            <View>
              <Button title="MODIFIER" color="#8bc34a"></Button>
            </View>
            <View style={styles.button}>
              <Button title="DECONNEXION" color="#ff5722"></Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 500,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    marginBottom: 15,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 30,
    padding: 15,
    paddingBottom: 50
  },
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    width: 200,
    marginTop: 10
  },
  title: {
    textAlign: "center"
  },
  text: {
    marginLeft: 10
  },
  button: {
    width: 200,
    marginTop: 15
  }
});

export default ProfilComponent;

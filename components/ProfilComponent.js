import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import firebase from "firebase";
import HelloComponent from "../components/model/HelloComponent";

class ProfilComponent extends Component {
  constructor() {
    super();
    this.state = {
      titleIdentifiant: "IDENTIFIANT",
      titleEmail: "E-MAIL",
      titleBirthday: "DATE DE NAISSANCE",
      titlePassword: "MOT DE PASSE",
      nom: "",
      email: "",
      birthday: "",
      password: "",
      editButton: "MODIFIER",
      logoutButton: "DECONNEXION",
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        this.setState({
          birthday: doc.data().birthday,
          nom: doc.data().username,
        });
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  updateTextInput(text, field) {
    const state = this.state;
    state[field] = text;
    this.setState(state);
  }
  update() {
    const { currentUser } = firebase.auth();
    const updateRef = firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid);

    // updateRef
    //   .set({
    //     nom: this.state.nom,
    //     birthday: this.state.birthday,
    //   })
    //   .then((docRef) => {
    //     this.setState({
    //       nom: "",
    //       birthday: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <HelloComponent />
        <View style={styles.main_container}>
          <View>
            <Text style={styles.title}>{this.state.titleIdentifiant}</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.text}
                placeholder="Login"
                value={this.state.nom}
                onChangeText={(text) => this.updateTextInput(text, "nom")}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleEmail}</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.text}
                placeholder="Email"
                editable={false}
                value={this.props.currentUser}
                onChangeText={(text) =>
                  this.updateTextInput(text, "currentUser")
                }
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleBirthday}</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.text}
                placeholder="Birthday"
                value={this.state.birthday}
                onChangeText={(text) => this.updateTextInput(text, "birthday")}
              />
            </View>
          </View>
          <View>
            <View style={styles.button}>
              <Button
                title="MODIFIER"
                color="#8bc34a"
                onPress={this.update()}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button
                title="DECONNEXION"
                color="#ff5722"
                onPress={this.signOutUser}
              ></Button>
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
    height: 400,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    marginBottom: 15,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 30,
    padding: 15,
    paddingBottom: 45,
  },
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    width: 200,
    marginTop: 10,
  },
  title: {
    textAlign: "center",
  },
  text: {
    marginLeft: 10,
  },
  button: {
    width: 200,
    marginTop: 15,
  },
});

export default ProfilComponent;

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import firebase from "firebase";
import HelloComponent from "../components/model/HelloComponent";

class ProfilComponent extends Component {
  state = {
    titleIdentifiant: "IDENTIFIANT",
    titleEmail: "E-MAIL",
    titleBirthday: "DATE DE NAISSANCE",
    titlePassword: "MOT DE PASSE",
    nom: "",
    email: "",
    birthday: "",
    password: "",
    editButton: "MODIFIER",
    logoutButton: "DECONNEXION"
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
          birthday: doc.data().birthday,
          nom: doc.data().username
        });
      })
      .catch(function(error) {
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
  update() {
    firebase.auth();
  }
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <HelloComponent />
        <View style={styles.main_container}>
          <View>
            <Text style={styles.title}>{this.state.titleIdentifiant}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text} placeholder="Login">
                {this.state.nom}
              </TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleEmail}</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.text}
                placeholder="Email"
                editable={false}
              >
                {this.props.currentUser}
              </TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.title}>{this.state.titleBirthday}</Text>
            <View style={styles.container}>
              <TextInput style={styles.text} placeholder="Birthday">
                {this.state.birthday}
              </TextInput>
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
    paddingBottom: 45
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

import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image, TextInput } from "react-native";
import firebase from "firebase";

export default class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    identifiant: "",
    birthday: "",
    errorMessage: null
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        firebase
          .firestore()
          .collection("users")
          .doc(data.user.uid)
          .set({
            email: this.state.email,
            username: this.state.identifiant,
            birthday: this.state.birthday,
            role: "user"
          });
        this.props.navigation.navigate("MainTabNavigator");
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.logo_container}>
          <Image
            style={styles.logo}
            source={require("../assets/images/Logo.png")}
          ></Image>
        </View>
        <View style={styles.input_container}>
          <View style={styles.run_man_view}>
            <Image
              style={styles.run_man}
              source={require("../assets/images/running-person.png")}
            ></Image>
          </View>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <Text style={styles.text_style}>IDENTIFIANT</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={identifiant => this.setState({ identifiant })}
            value={this.state.identifiant}
          />
          <Text style={styles.text_style}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Text style={styles.text_style}>DATE DE NAISSANCE</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={birthday => this.setState({ birthday })}
            value={this.state.birthday}
          />
          <Text style={styles.text_style}>MOT DE PASSE</Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.input}
          />
          <Button title="Sign Up" onPress={this.handleSignUp} />
        </View>
        <View style={styles.container}>
          <Text>Tu as déjà un compte ?</Text>
          <Text
            style={styles.textBleu}
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          >
            {" "}
            Identifie-toi ici !
          </Text>
        </View>
      </View>
    );
  }
}

RegisterScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  textBleu: {
    color: "blue"
  },
  logo: {
    width: 200,
    height: 100
  },
  run_man_view: {
    alignItems: "center"
  },
  run_man: {
    width: 85,
    height: 100,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#c8c8c8",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 10
  },
  button: {
    marginTop: 10,
    width: 300
  },
  logo_container: {
    alignItems: "center"
  },
  input_container: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 30,
    marginRight: 30,
    marginLeft: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#c8c8c8",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10
  },
  main_container: {
    paddingTop: 40,
    paddingBottom: 45,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text_style: {
    textAlign: "center"
  },
  container: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image, TextInput } from "react-native";

export default class LoginScreen extends Component {
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
              source={require("../assets/images/bonhommequicours.png")}
            ></Image>
          </View>
          <Text style={styles.text_style}>IDENTIFIANT</Text>
          <TextInput style={styles.input} editable={true} />
          <Text style={styles.text_style}>MOT DE PASSE</Text>
          <TextInput style={styles.input} />
          <Button
            title="SE CONNECTER"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <Text style={styles.text_style}>
          Pas encore de compte ? Inscris-toi ici !
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    marginTop: 15,
    borderColor: "#c8c8c8",
    marginBottom: 20,
    width: "100%"
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
    paddingBottom: 35,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text_style: {
    textAlign: "center"
  }
});

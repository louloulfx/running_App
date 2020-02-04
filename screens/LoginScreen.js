import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import firebase from "firebase";
export default class LoginScreen extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
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
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <Text style={styles.text_style}>EMAIL</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Text style={styles.text_style}>MOT DE PASSE</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          {/* <Button
            title="SE CONNECTER"
            onPress={() => this.props.navigation.navigate("Home")}
          /> */}
          <Button title="Login" onPress={this.handleLogin} />
        </View>
        <View style={styles.container}>
          <Text>Pas encore de compte ?</Text>
          <Text
            style={styles.textBleu}
            onPress={() => this.props.navigation.navigate("RegisterScreen")}
          >
            {" "}
            Inscris-toi ici !
          </Text>
        </View>
      </View>
    );
  }
}
LoginScreen.navigationOptions = {
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

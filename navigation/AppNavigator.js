import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import { StyleSheet, Platform, Image, Text, View } from "react-native";
import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Loading from "../screens/Loading";
import ProfilScreen from "../screens/ProfilScreen";

const LoginNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      RegisterScreen,
      LoginScreen,
      MainTabNavigator,
      ProfilScreen
    },
    { initialRouteName: "Loading" }
  )
);

import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Run",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesomeIcon icon={faRunning} size={26} color={tintColor} />
  )
};

HomeStack.path = "";

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen
  },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: "Historic",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="history" size={26} color={tintColor} />
  )
};

HistoryStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Profil",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" size={26} color={tintColor} />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HistoryStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;

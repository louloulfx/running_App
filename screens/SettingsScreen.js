import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import PizzaTranslator from "../components/model/PizzaTranslator";

import { MonoText } from "../components/StyledText";
export default function SettingsScreen() {
  return (
    <ScrollView>
      <PizzaTranslator />
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json"
};

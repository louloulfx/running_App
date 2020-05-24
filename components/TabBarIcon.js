import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Colors from "../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      icon={faUser}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

import React from "react";
import { Text, View } from "react-native";

import TestCmp from "../testCmp";

function SettingsScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#444" }}
    >
      <TestCmp name="Settings Here!" />
    </View>
  );
}

export default SettingsScreen;

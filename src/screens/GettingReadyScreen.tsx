import React from "react";
import { Text, View } from "react-native";

import TestCmp from "../testCmp";

function GettingReadyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#444" }}
    >
      <TestCmp name="Getting ready orders" />
    </View>
  );
}

export default GettingReadyScreen;

import React from "react";
import { Text, View } from "react-native";

import TestCmp from "../testCmp";

function DeliveredScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#444" }}
    >
      <TestCmp name="Delivered Orders Here!" />
    </View>
  );
}

export default DeliveredScreen;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TestComponent from "./src/testCmp";

export default function App() {
  let appName: string = "Driver App";
  appName = "Driver App!!!";

  return (
    <View style={styles.container}>
      <TestComponent name={appName} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

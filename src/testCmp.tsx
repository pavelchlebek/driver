import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export type Props = {
  name: string;
};

const TestComponent: React.FC<Props> = ({ name }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  let attatchedStyles = styles.text;
  if (clicked) {
    attatchedStyles = styles.clicked;
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleClick}>
      <Text style={attatchedStyles}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#cc2255",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  text: {
    color: "#ffffff",
    padding: 6,
    fontWeight: "bold",
  },
  clicked: {
    color: "#ffffff",
    padding: 10,
    fontWeight: "bold",
  },
});

export default TestComponent;

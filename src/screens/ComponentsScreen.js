import { StyleSheet, Text, View } from "react-native";

import React from "react";

const ComponentsScreen = () => {

  const greeting = <Text> Este es un texto desde una variable</Text>
  return (
    <View>
      <Text style={styles.text}>Mi primer APP</Text>
      <Text style={styles.subHeaderText}>Vamos que podemos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  subHeaderText: {
    fontSize: 25
  }
});

export default ComponentsScreen;

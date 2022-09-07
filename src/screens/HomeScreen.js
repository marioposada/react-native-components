import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Mi primer App</Text>
      <Button
        onPress={() => console.warn("Presionaste el boton")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => console.warn("Presionaste el boton")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

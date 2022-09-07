import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Mi primer App</Text>
    <Button
      onPress={() => navigation.navigate("Components")}
      title="Go to Components Demo"
    />
    <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Image")}
      title="Go to Components Demo"
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

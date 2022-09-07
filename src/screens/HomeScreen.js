import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Mi primer App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`}></Button>
      <Button title={`Decrease ${color}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;

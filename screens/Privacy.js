import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider"

const images = [
  require('../assets/Privacy/eye.png'),
];
const subjects = [
    'Internet Privacy'
]

const descriptions = [
    'What are my privacy rights on the internet?'
]

export default function Privacy() {
  return (
    <View style={styles.container}>
      <Slider images={images} subjects={subjects} descriptions={descriptions} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  }
});

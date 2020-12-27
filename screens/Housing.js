import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider";

const images = [
  require("../assets/Housing/evict.png"),
  require("../assets/Housing/fair.png"),
  require("../assets/Housing/deposit.png")
];
const subjects = [
    'Eviction',
    'Fair Housing',
    'Security Deposit'
];

const descriptions = [
    'I have or will be evicted',
    'What is fair housing?',
    'What are my rights when it comes to my deposit'
];

export default function Housing() {
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
  },
});

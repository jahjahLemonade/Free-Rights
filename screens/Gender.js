import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider"

const images = [
  require('../assets/Gender/a.png'),
  require('../assets/Gender/c.png'),
  require('../assets/Gender/b.png'),
];
const subjects = [
   'Sex Discrimination At Work',
   'Sexual Harassment',
   'Gender Discrimination On Campus'
]

const descriptions = [
   'I’m experiencing gender discrimination at my job',
   'What is sexual harassent?',
   'I’m experiencing gender discrimination on campus'
]

export default function Gender() {
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

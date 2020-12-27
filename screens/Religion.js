import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider"

const images = [
  require('../assets/Religion/religion.png'),
  require('../assets/Religion/airport.png'),
  require('../assets/Religion/worship.png')
];
const subjects = [
    'Religious Rights At the Work Place',
    'Religious Rights At The Airport',
    'Place Of Worship'
]

const descriptions = [
    'I’m facing religious discrimination at work',
    'I’m concerned about religious discrim. at an airport',
    'My house of worship is facing discrimination'
]

export default function Religion() {
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

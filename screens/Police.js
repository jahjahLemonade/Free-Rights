import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider"

const images = [
  require("../assets/Police/car.png"),
  require("../assets/Police/stop.png"),
  require("../assets/Police/arrest.png"),
  require("../assets/Police/record.png"),
  require("../assets/Police/door.png")
];
const subjects = [
    'Getting Pulled Over',
    'Stopped By The Police In Public',
    'Getting Arrested',
    'Recording Police Encounter',
    'Police At The Door',
]

const descriptions = [
    'I’ve been pulled over by the police',
    'I’ve been stopped by the police in public',
    'I’ve been arrested by the police',
    'Am I allowed to record the police',
    'The police are at my door'
]

export default function Police() {
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

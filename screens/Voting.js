import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "../Slider"

const images = [
  require('../assets/Voting/line.png'),
  require('../assets/Voting/handicap.png'),
  require('../assets/Voting/ballot.png'),
  require('../assets/Voting/vote.png'),
];
const subjects = [
    'Register To Vote',
    'Voters With Disabilities',
    'Finding My Polling Place',
    'Rights On Election Day'
]

const descriptions = [
    'I need to register to vote',
    'I am a voter with a disability',
    'I need to find my polling place',
    'What are my general rights on Election Day?'
]

export default function Voting() {
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

import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "./styles/global";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;

export default function Slider({ images, subjects, descriptions }) {
  const [state, setState] = useState(0);
  const handleChange = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== state) {
      setState(slide);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView pagingEnabled horizontal onScroll={handleChange}>
          {images.map((image, index) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                key={index}
                source={image}
                style={{ width, height: 300, marginBottom: 70 }}
              />
              <Text style={globalStyles.text}>{subjects[index]}</Text>
              <Text style={styles.text}>
               {descriptions[index]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k === state ? styles.pagingActiveText : styles.pagingText}
          >
            ⬤
          </Text>
        ))}
      </View>
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
  scrollContainer: {
    width,
    height
  },
  text: {
    color: "lightgrey",
    fontSize: 18,
    marginTop: 10
  },
  pagination: {
    flexDirection: "row",
  },
  pagingText: {
    fontSize: width / 50,
    color: "#888",
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 50,
    color: "white",
    margin: 3,
  },
});

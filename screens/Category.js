import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function Category({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.select}>Select Topic</Text>
      <View style={styles.topics}>
        <View style={styles.button}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Police")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/1.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Police</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Gender")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/3.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Gender</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Privacy")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/5.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Privacy</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Voting")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/2.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Voting</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Housing")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/4.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Housing</Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate("Religion")}
          >
            <Image
              style={globalStyles.img}
              source={require("../assets/Category/6.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.text}>Religion</Text>
        </View>
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
  text: {
    color: "white",
    fontSize: 21,
    color: "grey",
    marginTop: 20,
  },
  select: {
    marginTop: 30,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  topics: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    margin: 30,
  },
});

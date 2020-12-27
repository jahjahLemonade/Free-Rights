import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles} from "../styles/global"

//Might need to make style of img size a relative value

export default function Home({ navigation }) {
    return (
      <View style={globalStyles.container}>
        <View style={styles.imgBorder}>
          <Image style={styles.fistImg} source={require("../assets/fist.png")} />
        </View>
        <Text style={styles.appName}>Free Rights</Text>
        <Text style={styles.tagline}>Learn more about your rights</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Select Category')}>
            <Text style={styles.buttonText}>Select Category</Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  imgBorder: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 378,
    height: 366,
    borderRadius: 378 / 2
  },
  fistImg: {
    width: 358,
    height: 346
  },
  appName: {
    fontSize: 48,
    marginTop: 50,
    fontWeight: "bold",
    color: 'white'
  },
  tagline: {
    marginTop: 10,
    fontSize: 18,
    color: 'grey'
  },
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: 80,
    width: 273,
    height: 77,
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

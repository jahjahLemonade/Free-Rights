import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#030303",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
  },
    button: {
      marginTop: 30,
      alignItems: 'center'
    },
    img: {
      width: 120 ,
      height: 122,
      borderRadius: 140 / 2
    }
})
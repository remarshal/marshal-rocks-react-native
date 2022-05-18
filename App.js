import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#d90429",
          width: "50%",
          height: 70,
        }}
      ></View>
      <Text>Marshal Rocks!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
});

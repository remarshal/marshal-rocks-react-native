import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#d90429",
          width: "100%",
          height: landscape ? "70%" : "30%",
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

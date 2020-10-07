import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from "../components/Button";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.upper} source={require("../../assets/1.png")} />
      </View>
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "black",
            letterSpacing: 1.2,
          }}
        >
          Your Class
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#AFAFAF",
            letterSpacing: 1.2,
          }}
        >
          Select the your Standard or Class you study
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Button
            onPress={() => {
              console.log("9th");
            }}
            title={"9th"}
          />
          <Button
            onPress={() => {
              console.log("10th");
            }}
            title={"10th"}
          />
          <Button
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            title={"Confirm"}
          />
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  upper: {
    width: 450,
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  upperContainer: {
    bottom: "8%",
    alignItems: "center",
  },
  bottom: {
    padding: 20,
  },
});

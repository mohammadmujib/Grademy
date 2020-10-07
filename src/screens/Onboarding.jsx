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
      <View style={styles.bottom}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "900",
            marginVertical: 10,
            color: "#99a0a9",
          }}
        >
          Full Name
        </Text>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            paddingHorizontal: 20,
            justifyContent: "center",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#d8ddf2",
            elevation: 1,
          }}
        >
          <TextInput placeholder={"John Abraham"} />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            marginVertical: 10,
            color: "#99a0a9",
          }}
        >
          Mobile No
        </Text>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            paddingHorizontal: 20,
            justifyContent: "center",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#d8ddf2",
            elevation: 1,
          }}
        >
          <TextInput placeholder={"+91 8888888888"} />
        </View>
        <Button
          onPress={() => {
            navigation.navigate("SelectClass");
          }}
          title={"Confirm"}
        />
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

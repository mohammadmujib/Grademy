import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ title, onPress }) => {
  return (
    <LinearGradient
      colors={["#3e35ee", "#58e3dd"]}
      start={[0.5, 0]}
      end={[0.914, 1]}
      locations={[0, 1]}
      style={{
        width: 143,
        height: 55,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginRight: 20,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#FFFFFF",
            letterSpacing: 2,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({});

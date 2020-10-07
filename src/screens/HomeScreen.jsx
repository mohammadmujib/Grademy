import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import Books from "./Books";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#5d63f9", "#57edda"]}
        start={[0.025, 0.303]}
        end={[1.028, 1.056]}
        locations={[0, 1]}
        style={{ flex: 0.42, borderBottomLeftRadius: 50, paddingLeft: 20 }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "normal",
            color: "white",
            letterSpacing: 1.2,
            marginTop: 80,
            marginLeft: 20,
          }}
        >
          Hello
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            letterSpacing: 1.2,
            marginLeft: 20,
          }}
        >
          Swapnil
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            letterSpacing: 1.2,
            marginTop: 25,
            marginLeft: 20,
          }}
        >
          Notes
        </Text>
      </LinearGradient>

      <View
        style={{
          top: -50,
          marginLeft: 20,
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <Books title="abc" />
        <Books title="bcd" />
        <Books title="efg" />
        <Books title="ijk" />
        <Books title="lmn" />
      </View>
    </View>
  );
};

export default HomeScreen;

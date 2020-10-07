import React from "react";
import { View, Text, Image } from "react-native";
const Upper = () => {
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/upper.png")}
      />
    </View>
  );
};

export default Upper;

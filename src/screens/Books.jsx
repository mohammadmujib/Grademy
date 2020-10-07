import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Books = ({ title }) => {
  return (
    <View style={styles.books}>
      <Text>{title}</Text>
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  books: {
    width: 92,
    height: 117,
    borderRadius: 25,
    backgroundColor: "orange",
    padding: 10,
    marginRight: 10,
  },
});

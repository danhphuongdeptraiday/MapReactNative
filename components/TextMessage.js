import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextMessage = (props) => {
  return (
    <View style={styles.messageItem}>
      <Text style={styles.messageText}>{props.data}</Text>
    </View>
  );
};

export default TextMessage;

const styles = StyleSheet.create({
  messageItem: {
    backgroundColor: "red",
    padding: 10,
    marginBottom: 15,
  },

  messageText: {
    fontSize: 17,
    color: "white",
  },
});

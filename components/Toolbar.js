import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const ToolbarButton = ({ title, onPress }) => {
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>;
};

const onPressCamera = () => {
  console.log("Hello");
};

const onPressLocation = () => {
  console.log("Hello");
};

const Toolbar = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.toolbar}>
      <ToolbarButton title={"Camera"} onPress={onPressCamera} />
      <ToolbarButton title={"Location"} onPress={onPressLocation} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Type something..."}
          value={text}
          onChangeText={setText}
          blurOnSubmit={false}
          onSubmitEditing={setText}
        />
      </View>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "red",
  },

  button: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const ToolbarButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
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
      <View style={styles.buttonContainer}>
        <ToolbarButton title="📷" onPress={onPressCamera} />
        <ToolbarButton title="🛹" onPress={onPressLocation} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Type something..."}
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
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
    height: 50,
    width: "100%",
    backgroundColor: "#6495ed",
    display: "flex",
    flexDirection: "row",
    borderTopColor: "black",
    borderTopWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  buttonContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },

  inputContainer: {
    width: "70%",
    height: 40,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    // backgroundColor: "white",
    width: "100%",
    fontSize: 17,
    color: "black",
    height: "100%",
    paddingLeft: 20,
    borderRadius: 20,
  },
  button: {
    // width: 50,
    // height: 50,
    textAlign: "center",
    fontSize: 20,
    // backgroundColor: "blue",
  },
});

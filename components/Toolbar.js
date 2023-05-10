import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from "../utils/MessageUtils";

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

const Toolbar = ({ addMessage }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.toolbar}>
      <View style={styles.buttonContainer}>
        <ToolbarButton
          title="📷"
          onPress={async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              quality: 1,
            });
            if (!result.canceled) {
              addMessage(createImageMessage(result.assets[0].uri));
              return;
            } else {
              alert("You did not select any image");
            }
          }}
        />
        <ToolbarButton
          title="🛹"
          onPress={async () => {
            let status = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              console.log("Permission to access location was denied");
              return;
            }

            let location = await Location.getCurrentPositionAsync({});
            addMessage(
              createLocationMessage({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              })
            );
          }}
        />
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
          // onSubmitEditing={}

          // onSubmitEditing={}
        />
      </View>

      <View style={styles.send}>
        <Text
          style={styles.button}
          onPress={() => {
            addMessage(createTextMessage(text));
            setText("");
          }}
        >
          📧
        </Text>
      </View>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  toolbar: {
    height: 50,
    width: "100%",
    backgroundColor: "#b7b5cf",
    display: "flex",
    flexDirection: "row",
    // borderTopColor: "black",
    // borderTopWidth: 1,
    justifyContent: "space-between",
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
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    fontSize: 17,
    color: "white",
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

import Status from "./components/Status";
import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import TextMessage from "./components/TextMessage";
import MessageUtils from "./utiils/MessageUtils";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    createImageMessage("https://unsplash.it/300/300"),
    createTextMessage("Hello"),
    createTextMessage("World"),
    createLocationMessage({
      latitude: 37.78825,
      longtitude: -122.4324,
    }),
  ]);
  return (
    <View style={styles.container}>
      <Status />
      <View style={styles.partner}>
        <Text style={styles.partnerName}>Nguyen Danh Phuong</Text>
      </View>
      <View style={styles.conversation}>
        <TextMessage mess="Hello" />
        <TextMessage mess="ukafsdk" />

        <MapView initialRegion={{}} />
      </View>

      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  partner: {
    padding: 15,
    backgroundColor: "pink",
  },

  conversation: {
    alignItems: "flex-end",
    margin: 6,
    height: "83%",
  },

  messageItem: {
    backgroundColor: "red",
    padding: 10,
  },

  messageText: {
    fontSize: 17,
    color: "white",
  },

  bottom: {
    height: 45,
    backgroundColor: "grey",
  },
});

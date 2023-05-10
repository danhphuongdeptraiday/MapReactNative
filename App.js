import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Status from "./components/Status";
import { useEffect, useState } from "react";
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from "./utils/MessageUtils";
import TextMessage from "./components/TextMessage";
import { Image } from "react-native";
import LocationMessage from "./components/LocationMessage";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { FlatList } from "react-native";
import { TouchableHighlight } from "react-native";
import { BackHandler } from "react-native";
import Toolbar from "./components/Toolbar";

export default function App() {
  const [fullscreenImageId, setFullscreenImageId] = useState(null);
  const [messages, setMessages] = useState([
    createImageMessage("https://unsplash.it/600/600"),
    createTextMessage("World"),
    createImageMessage("https://unsplash.it/650/650"),
    createTextMessage("Hello"),
    createTextMessage("Hello 2"),
    createTextMessage("Hello 3"),
    createTextMessage("Hello 4"),
    createImageMessage("https://unsplash.it/620/620"),
    createImageMessage("https://unsplash.it/630/630"),
    // createLocationMessage({ latitude: 21.0278, longitude: 105.8342 })
  ]);

  const renderMessageBody = (item) => {
    switch (item.type) {
      case "text":
        return <TextMessage text={item.text} />;
      case "image":
        return <Image style={styles.imageMessage} source={{ uri: item.uri }} />;
      case "location":
        return <LocationMessage coordinate={item.coordinate} />;
      default:
        return null;
    }
  };

  const onPressMessage = (item) => {
    if (item.type == "text") {
      Alert.alert(
        "Delete message?",
        "Are you sure you want to permanently delete this message?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => {
              console.log(item.id);
              const newMessages = messages.filter((e) => e.id != item.id);
              console.log(newMessages);
              setMessages(newMessages);
            },
          },
        ]
      );
    } else if (item.type == "image") {
      setFullscreenImageId(item.id);
    }
  };

  const addMessage = (object) => {
    console.log(object);
    setMessages((preState) => [...preState, object]);
  };

  const renderMessageItem = ({ item }) => {
    if (item.type != "location") {
      return (
        <TouchableOpacity
          style={{ marginVertical: 5 }}
          onPress={() => onPressMessage(item)}
          activeOpacity={0.65}
        >
          {renderMessageBody(item)}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={{ marginVertical: 5 }}>{renderMessageBody(item)}</View>
      );
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (fullscreenImageId) {
          setFullscreenImageId(null);
          return true;
        }
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Status />
          <View style={styles.partner}>
            <Text style={styles.partnerName}>Mr. Dang Dinh Quan</Text>
          </View>
          {fullscreenImageId && (
            <TouchableHighlight
              style={styles.fullscreenOverlay}
              onPress={() => setFullscreenImageId(null)}
            >
              <Image
                style={styles.fullscreenImage}
                source={{
                  uri: messages.find((e) => e.id == fullscreenImageId).uri,
                }}
              />
            </TouchableHighlight>
          )}
          <View style={styles.conversation}>
            <FlatList
              style={{ flex: 1 }}
              data={messages}
              renderItem={renderMessageItem}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* <View style={styles.bottom}></View> */}

      <Toolbar addMessage={addMessage} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  partner: {
    padding: 17,
    backgroundColor: "#e9e9e9",
  },
  partnerName: {
    textAlign: "center",
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    zIndex: 1,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: "contain",
  },
  conversation: {
    flex: 1,
    margin: 6,
    alignItems: "flex-end",
  },
  imageMessage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  bottom: {
    height: 60,
    backgroundColor: "#eee",
  },
});

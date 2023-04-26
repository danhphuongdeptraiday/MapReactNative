import { View, Text } from "react-native";
import React from "react";

let messageId = 0;
function getNextId() {
  messageId += 1;
  return messageId;
}

export default function MessageUtils() {
  return (
    <View>
      <Text>MessageUtils</Text>
    </View>
  );
}

export function createLocationMessage(coordinate) {
  return {
    id: getNextId(),
    type: "location",
    coordinate,
  };
}

export function createTextMessage(text) {
  return {
    id: getNextId(),
    type: "text",
    text,
  };
}

export function createImageMessage(uri) {
  return {
    id: getNextId(),
    type: "image",
    uri,
  };
}

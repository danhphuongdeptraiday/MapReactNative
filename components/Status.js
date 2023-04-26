import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export default function Status() {
  const barHeight = Constants.statusBarHeight;
  const [connected, setConnected] = useState(false);
  const bgColor = connected ? "white" : "red";
  useEffect(() => {
    const unsub = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });

    return () => unsub();
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor={bgColor}
        barStyle={connected ? "dark-content" : "light-content"}
      />
      {Platform.OS == "ios" ? (
        <View style={{ height: barHeight, backgroundColor: bgColor }}></View>
      ) : (
        false
      )}

      {connected ? (
        false
      ) : (
        <View style={styles.netContainer}>
          <View style={styles.netBubble}>
            <Text style={styles.netWork}>No Net work Connections</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  netContainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    top: 40,
  },

  netBubble: {
    backgroundColor: "red",
    borderRadius: 15,
    padding: 15,
  },

  netWork: {
    textAlign: "center",
    color: "white",
  },
});

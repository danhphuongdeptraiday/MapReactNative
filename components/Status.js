import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default function Status() {
    const [connected, setConnected] = useState(true);
    const barHeight = Constants.statusBarHeight;
    const bgColor = connected ? 'white' : 'red';
    useEffect(() => {
        const unsub = NetInfo.addEventListener(
            state => {
                setConnected(state.isConnected);
            }
        );
        return () => unsub();
    }, []);
    return (
        <>
            <StatusBar
                backgroundColor={bgColor}
                barStyle={connected ? 'dark-content' : 'light-content'}
            />
            {
                Platform.OS == 'ios' ?
                    <View style={{ height: barHeight, backgroundColor: bgColor }}></View>
                    :
                    false
            }
            {!connected &&
                <View style={styles.netContainer}>
                    <View style={styles.netBubble}>
                        <Text style={styles.netText}>No network connection</Text>
                    </View>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    netContainer: {
        position: 'absolute',
        zIndex: 1,
        top: 20,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    netBubble: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingHorizontal: 17,
        paddingVertical: 10
    },
    netText: {
        textAlign: 'center',
        color: '#eee'
    }
});
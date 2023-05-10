import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function TextMessage({ text }) {
    return (
        <View style={styles.messageItem}>
            <Text style={styles.messageText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageItem: {
        backgroundColor: '#eb6f36',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    messageText: {
        fontSize: 15,
        color: 'white'
    }
});
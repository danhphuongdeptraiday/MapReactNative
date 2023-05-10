import { StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function LocationMessage({ coordinate }) {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...coordinate,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.045
                }}>
                <Marker coordinate={coordinate} />
            </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 180,
        borderRadius: 10,
        overflow: 'hidden'
    },
    map: {
        flex: 1
    }
});
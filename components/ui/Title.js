import { Text, StyleSheet, Platform, Dimensions } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
        marginTop: deviceHeight < 2340 ? 0 : 36
    }
});
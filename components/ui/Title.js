import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary700,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // For Android shadow
    },
});

import { View, Image, Text, StyleSheet, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions();

    const marginTopDistance = height < 480 ? -200 : 100;

    return (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title >GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/> 
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text> 
                rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.primary100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        alignSelf: 'center',
        margin: 36,
        overflow: 'hidden',
    }, 
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        lineHeight: 32,
        color: Colors.primary700,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});
import { useState } from "react";
import { 
    TextInput, 
    Text, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();
    
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText); 
    }

    function resetInputHandler() { 
        setEnteredNumber('');
    }

    function confirmInputHandler(enteredText) {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler},]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 420 ? 10 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess my number</Title>
                    <Card>
                        <InstructionText>Pick a Number</InstructionText> 
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength = {2} 
                            keyboardType = "number-pad"
                            autoCapitalize = "none" 
                            autoCorrect = {false}
                            onChangeText = {numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}> 
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 420 ? 10 : 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 16,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
import { Button, ScrollView, StyleSheet, Text, View } from "react-native"

const AnimationScreen: React.FC = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Basic Animation Demo</Text>

            {/* fade Animation Demo */}
            <View style={styles.demoContainer}>
                <View>

                </View>

                <View style={styles.buttonContainer}>
                    <Button title='Fade In'/>
                    <Button title='Fade Out'/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: "#f0f0f0"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 16,
    },
    demoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        width: "100%"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        marginTop: 10,
    }
});

export default AnimationScreen;
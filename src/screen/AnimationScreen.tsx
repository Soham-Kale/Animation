import { useRef } from "react";
import { Animated, Button, Easing, ScrollView, StyleSheet, Text, View } from "react-native"

const AnimationScreen: React.FC = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleFadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const handleFadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    const handleTranslate = () => {
        Animated.timing(translateAnim, {
            toValue: 100,
            duration: 1000,
            easing: Easing.bezier(0.25, 0.1, 0.25, 0.1),
            useNativeDriver: true,
        }).start();
    }

    const handleScale = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 2,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start()
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Basic Animation Demo</Text>
            <Text style={styles.header}>Fade In and Fade Out Demo</Text>

            {/* fade Animation Demo */}
            <View style={styles.demoContainer}>
                <Animated.View style={[
                    styles.box,
                    styles.opacityBox, 
                    {opacity: fadeAnim}
                ]}></Animated.View>

                <View style={styles.buttonContainer}>
                    <Button onPress={handleFadeIn} title='Fade In'/>
                    <Button onPress={handleFadeOut} title='Fade Out'/>
                </View>
            </View>

            {/* Translate Animation Demo */}
            <Text style={styles.header}>Translate Demo</Text>

            <View style={styles.demoContainer}>
                <Animated.View style={[
                    styles.box,
                    styles.translateBox,
                    {
                        transform: [
                            {
                                translateX: translateAnim
                            }
                        ]
                    },
                ]}></Animated.View>

                <Button onPress={handleTranslate} title="Translate"/>
            </View>

            {/* Scale Animation Demo */}
            <Text style={styles.header}>Scale Demo</Text>
            <Animated.View style={[
                    styles.box,
                    styles.scaleBox,
                    {
                        transform: [
                            {
                                scale: scaleAnim
                            }
                        ]
                    }
                ]}></Animated.View>
                <Button onPress={handleScale} title="Scale"/>


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
        marginBottom: 10,
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
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    opacityBox: {
        backgroundColor: "#3498db"
    },
    translateBox: {
        backgroundColor: "#75e758"
    },
    scaleBox: {
        backgroundColor: "#bf7be7"
    }
});

export default AnimationScreen;
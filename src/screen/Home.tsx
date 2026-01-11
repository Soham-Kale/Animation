import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "./RootNavigator";

const topics = [
    {
        id: 1,
        title: "Animation",
        screen: "AnimationScreenDemo"
    },
    {
        id: 2,
        title: "Animatio  gffgddns",
        screen: "Animation Scrklen jkn"
    },
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
}


export const Home: React.FC<Props> = ({navigation}) => {
    return(
        <View>
            <FlatList
                data={topics}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
                        style={style.topicButton}
                    >
                        <Text style={style.topicText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
} 

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    topicButton: {
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#e0e0e0"
    },
    topicText: {
        fontSize: 18,
        fontWeight: "bold",
    }
});